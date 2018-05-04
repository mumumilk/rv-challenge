import { Component, OnInit, OnDestroy } from '@angular/core';
import { HotelsService } from './hotels/shared/hotels.service';
import { Hotel } from './hotels/shared/hotel.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  hotels: Array<Hotel> = new Array<Hotel>();
  hotelSubs: Subscription;

  constructor(private hotelsService: HotelsService) {}

  ngOnInit() {
    // this.hotelSubs = this.getHotelsSubscription();
  }

  ngOnDestroy() {
    if (this.hotelSubs) { this.hotelSubs.unsubscribe(); }
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
