import { Injectable } from '@angular/core';
import { NewUser } from '../../modules/userInterface';
import { HttpClient } from '@angular/common/http';
import { LoginRule } from '../../modules/loginInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = 'http://localhost:3006/users';
  constructor(private httpClient: HttpClient) { }

  public registerUser(newUser: NewUser) {
    return this.httpClient.post<any>(`${this.authUrl}/create`, newUser);
  }

  public loginUser(loginUser: LoginRule) {
    return this.httpClient.post<any>(`${this.authUrl}/login`, loginUser);
  }

  public loggedIn() {
    return !!localStorage.getItem('token');
  }

  public getToken() {
    return localStorage.getItem('token');
  }
}
