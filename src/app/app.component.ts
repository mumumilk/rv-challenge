import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { HotelsService } from './hotels/shared/hotels.service';
import { Hotel } from './hotels/shared/hotel.model';
import { Subscription } from 'rxjs/Subscription';
import { DateSelectionComponent } from './shared/date-selection/date-selection.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  hotels: Array<Hotel> = new Array<Hotel>();
  hotelSubs: Subscription;

  searchClicked = false;

  constructor(private hotelsService: HotelsService) {}

  ngOnInit() { }

  ngOnDestroy() {
    if (this.hotelSubs) { this.hotelSubs.unsubscribe(); }
  }

  selectedDateChanged(e) {
      this.hotelsService.checkin = e.checkin;
      this.hotelsService.checkout = e.checkout;
      this.hotelSubs = this.getHotelsSubscription(null);

      this.searchClicked = true;
  }

  getHotelsSubscription(filters: any): Subscription {
    return this
      .hotelsService
      .getHotels(filters)
      .subscribe(data => {
        this.hotels = Hotel.fromJSONArray(data['data']);
      });
  }

  filtersChanged(filters) {
    this.hotelSubs = this.getHotelsSubscription(filters);
  }
}
