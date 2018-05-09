import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceHistoryChartComponent } from './price-history-chart/price-history-chart.component';

@NgModule({
    declarations: [
        PriceHistoryChartComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PriceHistoryChartComponent
    ],
    providers: [],
})
export class PricesHistoryModule {}
