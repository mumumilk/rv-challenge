import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../shared/hotel.model';
import { HotelsService } from '../shared/hotels.service';

@Component({
    selector: 'app-hotel-list',
    templateUrl: './hotel-list.component.html',
    styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
    @Input() hotels: Array<Hotel> = new Array<Hotel>();

    constructor(
        public hotelsService: HotelsService
    ) { }

    ngOnInit(): void { }
}
