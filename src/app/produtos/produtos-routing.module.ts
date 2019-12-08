import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';


const routes: Routes = [
  {
    path: '',
    component: ProductsPageComponent
  },
  {
    path: 'new',
    component: EditProductComponent
  },
  {
    path: ':id',
    component: EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
