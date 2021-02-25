import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../common/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// rxjs = reactive JS

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) { }

  // Make a GET request to backend baseURL
  // wrap data and unwrap as an array of products
  getProductList(): Observable<Product[]> {
    return this.httpClient.get<GetResponse>(this.baseURL).pipe(
      map(response => response._embedded.products)
    );
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  }
}