import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'currencyUA'
})
export class CurrencyUAPipe implements PipeTransform {

    constructor(private decimalPipe: DecimalPipe) { }

    transform(value: number | string): string {
        if (value !== undefined && value !== null) {
            return this.decimalPipe
                .transform(Number(value), '1.0-2')
                .toLocaleString()
                .replace(/,/g, '') + ' грн';
        } else {
            return '';
        }
    }

}
