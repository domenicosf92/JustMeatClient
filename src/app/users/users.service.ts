import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../modules/userInterface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiURL = 'http://localhost:3006/users';

  constructor(private httpClient: HttpClient) { }

  public getUsers() {
    return this.httpClient.get<User[]>(`${this.apiURL} `).toPromise();
  }
  public getUserById(userId: string) {
    return this.httpClient.get<User>(`${this.apiURL}?id=${userId}`).toPromise();
  }

  public getUserByUsername(username: string) {
    return this.httpClient.get<User>(`${this.apiURL}?id=${username}`).toPromise();
  }

  public deleteUser(userId: string) {
    return this.httpClient.delete<User>(`${this.apiURL}/${userId}`).toPromise();
  }
}
