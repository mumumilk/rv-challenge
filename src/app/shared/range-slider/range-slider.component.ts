import { Component, OnInit, ViewChild, ElementRef, Input, ChangeDetectorRef, AfterViewInit, EventEmitter, Output } from '@angular/core';

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

    @Output() valuesChanged: EventEmitter<any> = new EventEmitter<any>();

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
        if (el.value > this.selectedMaxValue) {
            this.toggleSliderValues(this.selectedMaxValue, el.value);
        } else {
            this.selectedMinValue = el.value;
        }

        this.emitChanges();
    }

    sliderMaxChanged(el) {
        if (el.value < this.selectedMinValue) {
            this.toggleSliderValues(el.value, this.selectedMinValue);
        } else {
            this.selectedMaxValue = el.value;
        }

        this.emitChanges();
    }

    toggleSliderValues(minValue, maxValue) {
            this.sliderMax.nativeElement.value = maxValue;
            this.selectedMaxValue = maxValue;

            this.sliderMin.nativeElement.value = minValue;
            this.selectedMinValue = minValue;
    }

    emitChanges() {
        this.valuesChanged.emit({min: this.selectedMinValue, max: this.selectedMaxValue});
    }

    // sliderChanged(el) {
    //     if (el.dataset.min && el.value < this.selectedMaxValue) {
    //         this.selectedMinValue = el.value;
    //     }

    //     if (!el.dataset.min && el.value > this.selectedMinValue) {
    //         this.selectedMaxValue = el.value;
    //     }

    //     if (el.dataset.min && el.value > this.selectedMaxValue) {
    //         const auxMin = this.selectedMaxValue;
    //         const auxMax = el.value;

    //         this.sliderMax.nativeElement.value = auxMax;
    //         this.selectedMaxValue = auxMax;

    //         this.sliderMin.nativeElement.value = auxMin;
    //         this.selectedMinValue = auxMin;
    //     }

    //     if (!el.dataset.min && el.value < this.selectedMinValue) {
    //         const auxMin = el.value;
    //         const auxMax = this.selectedMinValue;

    //         this.sliderMax.nativeElement.value = auxMax;
    //         this.selectedMaxValue = auxMax;

    //         this.sliderMin.nativeElement.value = auxMin;
    //         this.selectedMinValue = auxMin;
    //     }


    //     this.valuesChanged.emit({min: this.selectedMinValue, max: this.selectedMaxValue });
    // }




}
