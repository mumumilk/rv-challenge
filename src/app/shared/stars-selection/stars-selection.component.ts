import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-stars-selection',
    templateUrl: './stars-selection.component.html',
    styleUrls: ['./stars-selection.component.css']
})
export class StarsSelectionComponent implements OnInit {
    constructor() { }

    inputsArray: number[] = [];
    selectedValuesArray: number[] = [];

    @Output() starsChanged: EventEmitter<any> = new EventEmitter<any>();

    ngOnInit(): void {
        for (let i = 1; i <= 5 ; i++) {
            this.inputsArray.push(i);
        }
    }

    starCheckboxChanged(e) {
        if (e.target.checked) {
            this.selectedValuesArray.push(e.target.value);
        } else {
            this.selectedValuesArray = this.selectedValuesArray.filter(x => x !== e.target.value);
        }

        this.starsChanged.emit(this.selectedValuesArray);
    }
}
