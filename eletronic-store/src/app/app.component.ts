import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from './products.service';
import { CartService } from './cart.service';
import { SpinnerService } from './spinner/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from './cart/cart.component';


@Component({
  selector: 'es-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eletronic-store';
  products$: Observable<any>;
  cart$: Observable<any>;
  cart: any;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private dialog: MatDialog,
    private spinnerService: SpinnerService ) {
    this.spinnerService.setSpinnerEnable(true);
    this.products$ = this.productsService.getProducts();
    this.cart$ = this.cartService.cart$.subscribe(cart => this.cart = cart);
    this.spinnerService.setSpinnerEnable(false);    
  }

  onAddProduct(count, product) {
    this.cartService.addToCart(count, product);
  }

  openCart() {
    this.dialog.open(CartComponent, {
      width: '550px',
    });
  }

}
