import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Hotel } from '../shared/hotel.model';

@Component({
    selector: 'app-hotel-description',
    templateUrl: './hotel-description.component.html',
    styleUrls: ['./hotel-description.component.css']
})
export class HotelDescriptionComponent implements OnInit {
    constructor() { }

    @Input() hotel: Hotel;
    @Input() nightsQuantity = 1;

    @Output() priceHistoryClicked: EventEmitter<any> = new EventEmitter<any>();

    ngOnInit(): void { }
}
