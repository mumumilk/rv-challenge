import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../shared/hotels.service';

@Component({
    selector: 'app-hotel-stars-filter',
    templateUrl: './hotel-stars-filter.component.html',
    styleUrls: ['./hotel-stars-filter.component.css']
})
export class HotelStarsFilterComponent implements OnInit {
    constructor(private hotelsService: HotelsService) { }

    ngOnInit(): void { }

    onSlideChange(event: any): void {
        this.hotelsService.starsFilterChanged.emit(event.value);
    }
}
