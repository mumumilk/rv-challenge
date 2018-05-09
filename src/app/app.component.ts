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

  dateChangedSubs: Subscription;

  @ViewChild('dateSelection') dateSelection: DateSelectionComponent;

  constructor(private hotelsService: HotelsService) {}

  ngOnInit() {
    this.dateChangedSubs = this.getDateChangedSubscription();
  }

  ngOnDestroy() {
    if (this.hotelSubs) { this.hotelSubs.unsubscribe(); }
    if (this.dateChangedSubs) { this.dateChangedSubs.unsubscribe(); }
  }

  getDateChangedSubscription(): Subscription {
    return this.dateSelection.searchClicked.subscribe((data) => {
      this.hotelsService.checkin = data.checkin;
      this.hotelsService.checkout = data.checkout;
      this.hotelSubs = this.getHotelsSubscription();
    });
  }

  getHotelsSubscription(): Subscription {
    return this
      .hotelsService
      .getHotels()
      .subscribe(data => {
        this.hotels = Hotel.fromJSONArray(data.json()['data']);
      });
  }
}
