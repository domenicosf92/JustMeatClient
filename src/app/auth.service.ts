import { Injectable } from '@angular/core';
import { NewUser } from '../../modules/userInterface';
import { HttpClient } from '@angular/common/http';
import { LoginRule } from '../../modules/loginInterface';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = 'http://localhost:3006/users';
  token: string;
  decoded: any;
  constructor(private httpClient: HttpClient, private router: Router) { }

  public registerUser(newUser: NewUser) {
    return this.httpClient.post<any>(`${this.authUrl}/create`, newUser);
  }

  public loginUser(loginUser: LoginRule) {
    return this.httpClient.post<any>(`${this.authUrl}/login`, loginUser);
  }

  public loggedIn() {
    return !!localStorage.getItem('token');
  }

  public logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public checkAdmin(): boolean {
    if (this.loggedIn()) {
      this.token = this.getToken();
      this.decoded = jwt_decode(this.token);
      if (this.decoded.isAdmin === true ) {
        return true;
      }
    }
    return false;
  }
}
