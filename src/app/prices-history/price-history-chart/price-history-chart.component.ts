import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PriceHistory } from '../shared/price-history.model';

@Component({
    selector: 'app-price-history-chart',
    templateUrl: './price-history-chart.component.html',
    styleUrls: ['./price-history-chart.component.css']
})
export class PriceHistoryChartComponent implements OnInit {
    @Input() pricesHistory: PriceHistory[];

    @Output() backToDescriptionClicked: EventEmitter<any> = new EventEmitter<any>();
    constructor() { }

    ngOnInit(): void { }
}
