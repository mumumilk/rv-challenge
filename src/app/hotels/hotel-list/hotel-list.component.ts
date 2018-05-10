import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Hotel } from '../shared/hotel.model';
import { HotelsService } from '../shared/hotels.service';

@Component({
    selector: 'app-hotel-list',
    templateUrl: './hotel-list.component.html',
    styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
    @Input() hotels: Array<Hotel> = new Array<Hotel>();

    @Output() filtersChanged: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        public hotelsService: HotelsService
    ) { }

    ngOnInit(): void { }

    valueFilterChanged(e) {
        this.emitFilters(e);
    }

    emitFilters(values: any) {
        this.filtersChanged.emit({values: values});
    }
}
