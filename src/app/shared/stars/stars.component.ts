import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-stars',
    template: `
    <div style="display: inline-block;">
        <img
            [style.width.px]="size"
            [style.height.px]="size"
            *ngFor="let star of starsArray"
            src="/assets/img/star-filled.svg">
    </div>
    `
})
export class StarsComponent implements OnInit {
    starsArray: number[] = [];
    @Input() size = 20;

    @Input()
    set stars(val) {
        for (let index = 0; index < val; index++) {
            this.starsArray.push(val);
        }
    }

    constructor() { }

    ngOnInit(): void { }
}
