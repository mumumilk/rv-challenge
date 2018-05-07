import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-range-slider',
    templateUrl: './range-slider.component.html',
    styleUrls: ['./range-slider.component.css']
})
export class RangeSliderComponent implements OnInit, AfterViewInit {
    constructor() { }

    @Input() max;
    @Input() min;

    @ViewChild('slider1') slider1;
    @ViewChild('slider2') slider2;

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        console.log(this.slider2);
        this.slider2.value = 600;
    }

    changed(e) {
        console.log(e.value);
    }
}
