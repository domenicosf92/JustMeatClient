import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { NewUser } from '../../modules/userInterface';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private httpClient: HttpClient) { }
  apiUsersURL = 'http://localhost:3006/users';

  public login(email: string, password: string) {
    return this.httpClient.post<{access_token: string}>(`${this.apiUsersURL}/login `, {email, password}).pipe(tap(res => {
    localStorage.setItem('access_token', res.access_token);
    }));
  }

  public register(user: NewUser) {
    return this.httpClient.post<{access_token: string}>(`${this.apiUsersURL}/create `, user).pipe(tap(res => {
    this.login(user.email, user.password);
    }));
  }

  public logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !==  null;
  }
}
