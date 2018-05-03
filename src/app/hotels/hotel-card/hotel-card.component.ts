import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../shared/hotel.model';

@Component({
    selector: 'app-hotel-card',
    templateUrl: './hotel-card.component.html',
    styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {
    @Input() hotel: Hotel = new Hotel();

    constructor() { }

    ngOnInit(): void { }
}
