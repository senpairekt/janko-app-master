import { Component, OnInit } from '@angular/core';
import { catchError, combineLatest, EMPTY } from 'rxjs';
import { CategoryService } from './category/category.service';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pageTitle = 'Janko-App'
  errorMessage ='';

 products$ = this.productsService.products$

  

  constructor(private productsService : ProductsService,
                private categoryData : CategoryService) { }

  ngOnInit(): void {
  }

}
