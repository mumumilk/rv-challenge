import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsService } from './shared/hotels.service';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { HotelStarsFilterComponent } from './hotel-stars-filter/hotel-stars-filter.component';
import { HotelValueFilterComponent } from './hotel-value-filter/hotel-value-filter.component';
import { HotelDateSelectionComponent } from './hotel-date-selection/hotel-date-selection.component';

@NgModule({
    declarations: [
        HotelListComponent,
        HotelCardComponent,
        HotelStarsFilterComponent,
        HotelValueFilterComponent,
        HotelDateSelectionComponent
    ],
    imports: [ CommonModule ],
    exports: [
        HotelListComponent,
        HotelCardComponent,
        HotelStarsFilterComponent,
        HotelValueFilterComponent,
        HotelDateSelectionComponent
    ],
    providers: [ HotelsService ],
})
export class HotelsModule {}
