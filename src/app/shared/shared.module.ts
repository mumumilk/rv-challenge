import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StarsComponent } from './stars/stars.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DatePickerService } from './date-picker/shared/date-picker.service';

@NgModule({
    declarations: [ HeaderComponent, FooterComponent, StarsComponent, DatePickerComponent],
    imports: [ CommonModule ],
    exports: [ HeaderComponent, FooterComponent, StarsComponent, DatePickerComponent],
    providers: [ DatePickerService ],
})
export class SharedModule {}
