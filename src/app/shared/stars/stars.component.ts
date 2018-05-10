import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-stars',
    template: `
    <div style="display: inline-block;">
        <img
            [style.width.px]="size"
            [style.height.px]="size"
            *ngFor="let star of starsArray"
            src="/assets/img/star-filled.svg"><img
                [style.width.px]="size"
                [style.height.px]="size"
                *ngFor="let outlineStar of oulineStarsArray"
                src="/assets/img/star-outline.svg">
    </div>
    `
})
export class StarsComponent implements OnInit {
    starsArray: number[] = [];
    oulineStarsArray: number[] = [];

    @Input() size = 20;
    @Input() showOutline = false;

    @Input()
    set stars(val) {
        for (let index = 0; index < val; index++) {
            this.starsArray.push(index);
        }

        if (this.showOutline) {
            for (let index = this.starsArray.length; index < 5; index++) {
                this.oulineStarsArray.push(index);
            }
        }
    }

    constructor() { }

    ngOnInit(): void { }
}
