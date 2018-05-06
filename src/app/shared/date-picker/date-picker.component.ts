import { Component, EventEmitter, Output } from '@angular/core';
import { DatePickerService } from './shared/date-picker.service';

@Component({
    selector: 'app-date-picker',
    templateUrl: './date-picker.component.html',
    styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {
    constructor(
        private datePickerService: DatePickerService
    ) { }

    private _checkin = null;
    private _checkout = null;

    set checkin(value) {
        this._checkin = value;
        this.datePickerService.checkin = this._checkin;
    }
    get checkin(): any {
        return this._checkin;
    }

    set checkout(value) {
        this._checkout = value;
        this.datePickerService.checkout = this._checkout;
    }
    get checkout(): any {
        return this._checkout;
    }

    weeks =
        [
            {
                days:
                    [
                        { number: null, selected: false },
                        { number: null, selected: false },
                        { number: null, selected: false },
                        { number: null, selected: false },
                        { number: 1, selected: false },
                        { number: 2, selected: false },
                        { number: 3, selected: false },
                    ]
            },
            {
                days:
                    [
                        { number: 4, selected: false },
                        { number: 5, selected: false },
                        { number: 6, selected: false },
                        { number: 7, selected: false },
                        { number: 8, selected: false },
                        { number: 9, selected: false },
                        { number: 10, selected: false },
                    ]
            },
            {
                days:
                    [
                        { number: 11, selected: false },
                        { number: 12, selected: false },
                        { number: 13, selected: false },
                        { number: 14, selected: false },
                        { number: 15, selected: false },
                        { number: 16, selected: false },
                        { number: 17, selected: false },
                    ]
            },
            {
                days:
                    [
                        { number: 18, selected: false },
                        { number: 19, selected: false },
                        { number: 20, selected: false },
                        { number: 21, selected: false },
                        { number: 22, selected: false },
                        { number: 23, selected: false },
                        { number: 24, selected: false },
                    ]
            },
            {
                days:
                    [
                        { number: 25, selected: false },
                        { number: 26, selected: false },
                        { number: 27, selected: false },
                        { number: 28, selected: false },
                        { number: 29, selected: false },
                        { number: 30, selected: false },
                        { number: 31, selected: false },
                    ]
            },
        ];


    selectDay(selectedDay: number, weekIndex: number, dayIndex: number) {
        const value = { number: selectedDay, weekIndex: weekIndex, dayIndex: dayIndex };

        if (!this.checkin) {
            this.checkin = value;
            return;
        }

        if (!this.checkout) {
            this.checkout = value;
            return;
        }

        if (this.checkin && this.checkout && (selectedDay > this.checkout.number)) {
            this.checkin = value;
            this.checkout = null;
            return;
        }

        if (this.checkin && this.checkout && (selectedDay < this.checkin.number)) {
            this.checkin = value;
            return;
        }

        if (this.checkin && this.checkout && (selectedDay === this.checkout.number)) {
            this.checkin = value;
            this.checkout = null;
            return;
        }
    }

    selectDays() {
        if (!this.checkin && !this.checkout) {
            this.unselectAllDays();
        } else {
            this.selectDaysBetweenDates();
        }
    }

    selectDaysBetweenDates() {
        this.weeks.forEach(week => {
            week.days.forEach(day => {
                if (day.number &&
                    (day.number <= (this.checkout ? this.checkout.number : 0) &&
                        day.number >= (this.checkin ? this.checkin.number : 0))) {
                    day.selected = true;
                } else {
                    day.selected = false;
                }
                if (!this.checkout && day.number === this.checkin.number) {
                    day.selected = true;
                }
            });
        });
    }

    unselectAllDays() {
        this.weeks.forEach(week => week.days.forEach(day => day.selected = false));
    }

}
