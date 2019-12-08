import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Product } from '../models/product';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

//endpoint
const url = 'products/';

@Injectable()
export class ProductService {

  constructor(private httpService : HttpService) { }

  getProducts() {
    return this.httpService.doGet(url);
  }

  add(produto: Product) {
    return this.httpService.doPost(url, JSON.stringify(produto))
    .pipe(tap(data => this.getProducts()));
  }

  remove(id: number) {
    return this.httpService.doDelete(url + id);
  }

  update(produto: Product) {
    return this.httpService.doPut(url + produto.id, JSON.stringify(produto));
  }

  getById(id: number): Observable<Product> {
    return this.httpService.doGet<Product>(url + id);
  }

}
