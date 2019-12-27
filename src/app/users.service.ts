import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../modules/userInterface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiURL = 'http://localhost:3006/users';

  constructor(private httpClient: HttpClient) { }

  public getUsers() {
    return this.httpClient.get<User[]>(`${this.apiURL} `).toPromise();
  }
}
