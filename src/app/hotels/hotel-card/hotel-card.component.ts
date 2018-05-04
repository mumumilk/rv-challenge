import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../shared/hotel.model';

@Component({
    selector: 'app-hotel-card',
    templateUrl: './hotel-card.component.html',
    styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {
    @Input() hotel: Hotel = new Hotel(
        'Hyatt Place Charlotte Airport/Lake Pointe',
        'This hotel is located 7 miles from downtown Charlotte and 5 miles from Charlotte Douglas International Airport.',
        'https://melhorespousadas.tur.br/uploads/pousadas-fotos/012/img-hotel-aguas-da-serra-135113.jpg',
        3,
        670
    );

    constructor() { }

    ngOnInit(): void { }
}
