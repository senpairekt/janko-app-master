import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';


@NgModule({
  declarations: [
    SharedModuleModule,
    AppModule,
    ProductsComponent,
    ProductsService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
