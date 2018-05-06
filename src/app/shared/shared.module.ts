import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StarsComponent } from './stars/stars.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

@NgModule({
    declarations: [ HeaderComponent, FooterComponent, StarsComponent, DatePickerComponent],
    imports: [ CommonModule ],
    exports: [ HeaderComponent, FooterComponent, StarsComponent, DatePickerComponent],
    providers: [],
})
export class SharedModule {}
