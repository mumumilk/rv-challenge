import { PriceHistory } from '../../prices-history/shared/price-history.model';

export class Hotel {
    constructor(
        public name?: string,
        public description?: string,
        public image?: string,
        public rate?: number,
        public price?: number,
        public price_history?: Array<PriceHistory>
    ) {}

    static fromJSONArray(array: Array<any>): Array<Hotel> {
        const newArray = new Array<Hotel>();

        array.forEach(obj => {
            newArray.push(this.fromJSONObject(obj));
        });

        return newArray;
    }

    static fromJSONObject(object: any): Hotel {
        return new Hotel(
            object['name'],
            object['description'],
            object['image'],
            object['rate'],
            object['price'],
            PriceHistory.fromJSONArray(object['price_history'])
        );
    }
}
