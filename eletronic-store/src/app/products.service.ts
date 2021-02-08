import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from './../environments/environment';

// const PRODUCTS_API = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(environment.apiUrl);
  }
}
