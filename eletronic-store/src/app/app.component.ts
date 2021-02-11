import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartComponent } from './cart/cart.component';
import { ProductsService } from './products.service';
import { SpinnerService } from './spinner/spinner.service';
import { CartService } from './cart.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'es-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'eletronic-store';
  products$: Observable<any>;
  cart$: Observable<any>;
  cart: any;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private dialog: MatDialog,
    private spinnerService: SpinnerService,
    update: SwUpdate,
    private snackBar: MatSnackBar) {
    this.spinnerService.setSpinnerEnable(true);
    this.products$ = this.productsService.getProducts();
    this.cart$ = this.cartService.cart$.subscribe(cart => this.cart = cart);
    this.spinnerService.setSpinnerEnable(false);

    update.available.subscribe(event => {
      this.snackBar.open('Nova atualização disponível', 'Instale Agora', {
        duration: 4000
      }).onAction().subscribe(() => {
        update.activateUpdate().then(() => location.reload());
      });
    });
    update.checkForUpdate();
  }

  onAddProduct(count, product) {
    this.cartService.addToCart(count, product);
  }

  openCart() {
    this.dialog.open(CartComponent, {
      width: '550px',
    });
  }

  displayNetworkStatus() {
    if (navigator.onLine) {
      document.querySelector('body').style.filter = '';
    } else {
      document.querySelector('body').style.filter = 'grayscale(1)';
    }
  }

  ngOnInit(): void {
    this.displayNetworkStatus();
    window.addEventListener('online', this.displayNetworkStatus);
    window.addEventListener('offline', this.displayNetworkStatus);
  }

}
