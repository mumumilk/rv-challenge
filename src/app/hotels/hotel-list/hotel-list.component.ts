import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../shared/hotel.model';

@Component({
    selector: 'app-hotel-list',
    templateUrl: './hotel-list.component.html',
    styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
    @Input() hotels: Array<Hotel> = new Array<Hotel>();

    constructor() { }

    ngOnInit(): void { }
}
