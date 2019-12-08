import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { Http, Headers } from '@angular/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoginServiceService {

  private url: string = 'http://localhost:8080/auth';

  public showNavBarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  private authenticated = false;

  constructor(private router: Router,
              private http: Http) { }

  signIn(user: User) {
    this.http.post(this.url + '/login', JSON.stringify(user), { headers: this.getHeaders() }).pipe(tap(
      data => this.login(data.json()),
      error => this.authenticated = false)).subscribe();
  }

  login(body) {
    localStorage.setItem('token', body.token);
    this.showNavBar(true);
    this.router.navigate(['/']);
  }

  logout() {
    this.authenticated = false;
    this.showNavBar(false);
    this.router.navigate(['/signin']);
  }

  isAuthenticated() {
    return this.authenticated;
  }

  private showNavBar(ifShow: boolean) {
    this.showNavBarEmitter.emit(ifShow);
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

}
