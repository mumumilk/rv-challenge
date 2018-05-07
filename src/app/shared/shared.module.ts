import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StarsComponent } from './stars/stars.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DatePickerService } from './date-picker/shared/date-picker.service';
import { RangeSliderComponent } from './range-slider/range-slider.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        StarsComponent,
        DatePickerComponent,
        RangeSliderComponent
    ],
    imports: [ CommonModule ],
    exports: [
        HeaderComponent,
        FooterComponent,
        StarsComponent,
        DatePickerComponent,
        RangeSliderComponent
    ],
    providers: [ DatePickerService ],
})
export class SharedModule {}
