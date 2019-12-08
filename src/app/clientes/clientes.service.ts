import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

import { map, tap } from 'rxjs/operators';

@Injectable()
export class ClientesService {

  private url: string = 'http://localhost:8080/clientes';

  clientesChanged = new EventEmitter<Observable<Cliente[]>>();

  constructor(private http: Http) { }

  getAll(): Observable<Cliente[]> {
    return this.http.get(this.url)
      .pipe(map(res => res.json(),
        error => this.handleError(error)),
      );
  }

  add(cliente: Cliente) {
    return this.http.post(this.url, JSON.stringify(cliente),
      { headers: this.getHeaders() }).pipe(tap(data => this.clientesChanged.emit(this.getAll()), error => this.handleError(error)));
  }

  remove(id: number) {
    return this.http.delete(this.getUrl(id),
      { headers: this.getHeaders() }).pipe(
        map(res => res.json(),
            error => this.handleError(error))
      );
  }

  update(cliente: Cliente) {
    return this.http.put(this.url, JSON.stringify(cliente),
      { headers: this.getHeaders() }).pipe(
        map(data => this.clientesChanged.emit(this.getAll()),
            error => this.handleError(error))
      );
  }

  get(id: number) {
    return this.getAll().pipe(
      map((list: any) => list.find(cliente => cliente.codigo == id),
          error => this.handleError(error)));
  }

  private handleError(error: any) {
    let erro = error.message || 'Server error';
    console.error('Ocorreu um erro', error);
    return Observable.throw(erro);
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  private getUrl(id: number) {
    return '${this.url}/${id}';
  }

}
