import { Injectable } from '@angular/core';
import { ProductData } from '../product-data/product-data';
import { catchError, EMPTY, map, of, tap } from 'rxjs';
import { ProductCategory } from './category-interface';
import { ProductCategoryData } from './category-data';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories$ = of(new ProductCategoryData().categories)
  .pipe ()

  constructor() { }
}
