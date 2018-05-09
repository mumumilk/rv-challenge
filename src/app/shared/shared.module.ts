import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StarsComponent } from './stars/stars.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DatePickerService } from './date-picker/shared/date-picker.service';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { StarsSelectionComponent } from './stars-selection/stars-selection.component';
import { DateSelectionComponent } from './date-selection/date-selection.component';
import { TooltipModule } from './tooltip/tooltip.module';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        StarsComponent,
        DatePickerComponent,
        RangeSliderComponent,
        StarsSelectionComponent,
        DateSelectionComponent
    ],
    imports: [ CommonModule, TooltipModule],
    exports: [
        HeaderComponent,
        FooterComponent,
        StarsComponent,
        DatePickerComponent,
        RangeSliderComponent,
        StarsSelectionComponent,
        DateSelectionComponent
    ],
    providers: [ DatePickerService ],
})
export class SharedModule {}
