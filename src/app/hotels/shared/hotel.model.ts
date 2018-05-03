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

export class PriceHistory {
    constructor(
        public month?: string,
        public value?: number
    ) {}

    static fromJSONArray(array: Array<any>): Array<PriceHistory> {
        const newArray = new Array<PriceHistory>();

        array.forEach(obj => {
            newArray.push(this.fromJSONObject(obj));
        });

        return newArray;
    }

    static fromJSONObject(object: any): PriceHistory {
        return new PriceHistory(
            object['month'],
            object['value']
        );
    }
}
