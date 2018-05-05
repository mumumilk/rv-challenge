import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StarsComponent } from './stars/stars.component';

@NgModule({
    declarations: [ HeaderComponent, FooterComponent, StarsComponent],
    imports: [ CommonModule ],
    exports: [ HeaderComponent, FooterComponent, StarsComponent ],
    providers: [],
})
export class SharedModule {}
