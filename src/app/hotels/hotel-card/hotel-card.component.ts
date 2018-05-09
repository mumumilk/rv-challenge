import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../shared/hotel.model';
import { DatePickerService } from '../../shared/date-picker/shared/date-picker.service';
import { HotelsService } from '../shared/hotels.service';

@Component({
    selector: 'app-hotel-card',
    templateUrl: './hotel-card.component.html',
    styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {
    @Input() hotel: Hotel = new Hotel();

    description = true;

    get nights(): number {
        return this.hotelsService.totalDays;
    }

    constructor(
        private hotelsService: HotelsService
    ) { }

    ngOnInit(): void { }

    toggleDescription() {
        this.description = !this.description;
    }
}
