import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsService } from './shared/hotels.service';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { HotelDateSelectionComponent } from './hotel-date-selection/hotel-date-selection.component';

@NgModule({
    declarations: [
        HotelListComponent,
        HotelCardComponent,
        HotelDateSelectionComponent
    ],
    imports: [ CommonModule ],
    exports: [
        HotelListComponent,
        HotelCardComponent,
        HotelDateSelectionComponent
    ],
    providers: [ HotelsService ],
})
export class HotelsModule {}
