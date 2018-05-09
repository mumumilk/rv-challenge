import { Component, OnInit, Input } from '@angular/core';
import { PriceHistory } from '../shared/price-history.model';

@Component({
    selector: 'app-price-history-chart',
    templateUrl: './price-history-chart.component.html',
    styleUrls: ['./price-history-chart.component.css']
})
export class PriceHistoryChartComponent implements OnInit {
    @Input() pricesHistory: PriceHistory[];

    constructor() { }

    ngOnInit(): void { }
}
