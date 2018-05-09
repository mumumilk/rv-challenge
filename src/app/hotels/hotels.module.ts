import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsService } from './shared/hotels.service';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { SharedModule } from '../shared/shared.module';
import { PricesHistoryModule } from '../prices-history/prices-history.module';
import { HotelDescriptionComponent } from './hotel-description/hotel-description.component';

@NgModule({
    declarations: [
        HotelListComponent,
        HotelCardComponent,
        HotelDescriptionComponent
    ],
    imports: [ CommonModule, SharedModule, PricesHistoryModule],
    exports: [
        HotelListComponent,
        HotelCardComponent,
        HotelDescriptionComponent
    ],
    providers: [ HotelsService ],
})
export class HotelsModule {}
