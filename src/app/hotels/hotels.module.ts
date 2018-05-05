import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsService } from './shared/hotels.service';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { HotelDateSelectionComponent } from './hotel-date-selection/hotel-date-selection.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        HotelListComponent,
        HotelCardComponent,
        HotelDateSelectionComponent
    ],
    imports: [ CommonModule, SharedModule],
    exports: [
        HotelListComponent,
        HotelCardComponent,
        HotelDateSelectionComponent
    ],
    providers: [ HotelsService ],
})
export class HotelsModule {}
