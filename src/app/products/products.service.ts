import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, combineLatest, EMPTY, map, of, shareReplay, tap } from 'rxjs';
import { CategoryService } from './category/category.service';
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
 
 
   productsWithCategory$ = combineLatest([
     this.products$,
     this.categoryData.categories$,
   ])
   .pipe(
    map(([products, categories]) =>
      products.map(product => ({
        ...product,
        category: categories.find ( a => product.categoryId === a.id).name,
        searchKey: [product.productName]
      }) as Product)
      
    ),
    
    shareReplay(1)
  );

  constructor(private http:HttpClient,
              private categoryData : CategoryService) { }
}
