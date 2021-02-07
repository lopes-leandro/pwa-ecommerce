import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subTotal'
})
export class SubTotalPipe implements PipeTransform {

  currencyPipe: any;

  constructor() {}

  transform(cart: any): any {
    let total = 0;
    Object.values(cart).forEach((product: any) => {
      if (product.count) {
        total += product.count * product.salePrice;
      }
    })
    return total;
  }

}
