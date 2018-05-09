import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../shared/hotel.model';

@Component({
    selector: 'app-hotel-description',
    templateUrl: './hotel-description.component.html',
    styleUrls: ['./hotel-description.component.css']
})
export class HotelDescriptionComponent implements OnInit {
    constructor() { }

    @Input() hotel: Hotel;
    @Input() nightsQuantity = 31;

    ngOnInit(): void { }
}
