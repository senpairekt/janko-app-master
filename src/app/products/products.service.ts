import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, tap } from 'rxjs';
import { Product } from './product-data/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsUrl = 'api/product'

   products$ = this.http.get<Product[]>(this.productsUrl)
   .pipe(
    tap(data => console.log('Products: ', JSON.stringify(data))),
  );
  constructor(private http:HttpClient) { }
}
