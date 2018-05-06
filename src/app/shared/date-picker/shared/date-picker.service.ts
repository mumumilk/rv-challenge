import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class DatePickerService {
    private _checkin: any = null;
    private _checkout: any = null;

    public checkinChanged: EventEmitter<any> = new EventEmitter<any>();
    public checkoutChanged: EventEmitter<any> = new EventEmitter<any>();


    get areDatesSelected(): boolean {
        return this.checkin && this.checkout;
    }

    set checkin(value) {
        this._checkin = value;
        this.checkinChanged.emit(this._checkin);
    }
    get checkin(): any {
        return this._checkin;
    }

    set checkout(value) {
        this._checkout = value;
        this.checkoutChanged.emit(this.checkout);
    }
    get checkout(): any {
        return this._checkout;
    }

}
