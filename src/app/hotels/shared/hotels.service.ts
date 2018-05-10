import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Hotel } from './hotel.model';
import { map } from 'rxjs/operators/map';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class HotelsService {
    apiUrl = 'https://rif2ibxnjk.execute-api.sa-east-1.amazonaws.com/prod/';
    starsFilterChanged: EventEmitter<any> = new EventEmitter<any>();
    valueFilterChanged: EventEmitter<any> = new EventEmitter<any>();

    checkin: any = null;
    checkout: any = null;

    get totalDays(): number {
        return this.checkout.number - this.checkin.number || 0;
    }

    constructor(private _http: HttpClient) {}

    getHotels(filters: any) {

        let params = new HttpParams();

        if (filters && filters.values) {
            params = params.append('minPrice', filters.values.min);
            params = params.append('maxPrice', filters.values.max);
        }

        return this._http.get(this.apiUrl + 'hotels', { params: params});
    }

}
