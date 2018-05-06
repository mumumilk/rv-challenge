import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { DatePickerComponent } from '../../shared/date-picker/date-picker.component';
import { DatePickerService } from '../../shared/date-picker/shared/date-picker.service';
import { HotelsService } from '../shared/hotels.service';

@Component({
    selector: 'app-hotel-date-selection',
    templateUrl: './hotel-date-selection.component.html',
    styleUrls: ['./hotel-date-selection.component.css']
})
export class HotelDateSelectionComponent implements OnInit {
    constructor(
        public datePickerService: DatePickerService,
        public hotelsService: HotelsService
    ) { }

    @Output() searchClicked: EventEmitter<any> = new EventEmitter<any>();

    ngOnInit(): void { }

    searchHotels() {
        if (this.datePickerService.areDatesSelected) {
            this.searchClicked.emit({
                checkin: this.datePickerService.checkin,
                checkout: this.datePickerService.checkout
            });
        }
    }
}
