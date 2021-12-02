import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';
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
   .pipe(
     catchError( err => {
       this.errorMessage = err;
       return EMPTY
     })
   )

  constructor(private productsService : ProductsService) { }

  ngOnInit(): void {
  }

}
