import { Component, OnInit, ViewChild, ElementRef, Input, ChangeDetectorRef, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-range-slider',
    templateUrl: './range-slider.component.html',
    styleUrls: ['./range-slider.component.css']
})
export class RangeSliderComponent implements OnInit, AfterViewInit {
    constructor(
        private changeDetector: ChangeDetectorRef
    ) { }

    @Input() max;
    @Input() min;

    selectedMinValue;
    selectedMaxValue;

    @ViewChild('sliderMin') sliderMin;
    @ViewChild('sliderMax') sliderMax;

    ngOnInit(): void {
        this.selectedMinValue = this.min;
        this.selectedMaxValue = this.max;
    }

    ngAfterViewInit() {
        this.sliderMin.nativeElement.value = this.min;
        this.sliderMax.nativeElement.value = this.max;
        this.changeDetector.markForCheck();
    }

    sliderMinChanged(el) {
        this.selectedMinValue = el.value;
    }

    sliderMaxChanged(el) {
        this.selectedMaxValue = el.value;
    }




}
