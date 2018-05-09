import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceHistoryChartComponent } from './price-history-chart/price-history-chart.component';
import { TooltipModule } from '../shared/tooltip/tooltip.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        PriceHistoryChartComponent
    ],
    imports: [
        CommonModule, TooltipModule, SharedModule
    ],
    exports: [
        PriceHistoryChartComponent
    ],
    providers: [],
})
export class PricesHistoryModule {}
