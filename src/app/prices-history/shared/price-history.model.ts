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
