import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsService } from './shared/hotels.service';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { SharedModule } from '../shared/shared.module';
import { TooltipModule } from '../shared/tooltip/tooltip.module';

@NgModule({
    declarations: [
        HotelListComponent,
        HotelCardComponent
    ],
    imports: [ CommonModule, SharedModule, TooltipModule],
    exports: [
        HotelListComponent,
        HotelCardComponent
    ],
    providers: [ HotelsService ],
})
export class HotelsModule {}
