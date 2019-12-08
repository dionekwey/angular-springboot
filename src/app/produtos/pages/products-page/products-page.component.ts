import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  public products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().pipe(
      tap((apiProducts: any) => {
        this.products = apiProducts.content;
      })
    ).subscribe();
  }

  edit(product: Product) {}

  delete(product: Product) {
    this.productService.remove(product.id).pipe(tap(() => {
      const indexToRemove = this.products.findIndex(prod => prod.id === product.id);
      this.products.splice(indexToRemove, 1);
    })).subscribe();
  }

}
