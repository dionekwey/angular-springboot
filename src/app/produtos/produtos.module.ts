import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductService } from './services/product.service';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductsPageComponent, EditProductComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductService
  ]
})
export class ProdutosModule { }
