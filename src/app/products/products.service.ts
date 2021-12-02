import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, of, tap } from 'rxjs';
import { Product } from './product-data/product';
import { ProductData } from './product-data/product-data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsUrl = 'api/product'

   products$ = of(new ProductData().products)
   .pipe(
    tap(data => console.log('Products: ', JSON.stringify(data))),
  );
  constructor(private http:HttpClient) { }
}
