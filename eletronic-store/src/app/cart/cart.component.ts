import { Component, OnInit } from '@angular/core';
import { CartService } from './../cart.service';

@Component({
  selector: 'es-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart$: any;

  constructor(private cartService: CartService) { 
    this.cart$ = this.cartService.cart$;
  }

  ngOnInit(): void {
  }

  getValues(obj) {
    return Object.values(obj)
      .filter(x => typeof x === 'object');
  }

  onSelectionChange($event, product) {
    this.cartService.addToCart($event.value, product);
  }

}
