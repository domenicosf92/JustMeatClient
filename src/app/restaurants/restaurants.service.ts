import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Restaurant } from './restaurants.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  private apiURL = `http://localhost:3006/restaurants`;
  constructor(private httpClient: HttpClient) { }

  public getRestaurants(): Promise<Restaurant[]> {
    return this.httpClient.get<Restaurant[]>(`${this.apiURL}`).toPromise();
  }

  public async getRestaurantsByCity(city: string): Promise<Restaurant[]> {
    return this.httpClient.get<Restaurant[]>(`${this.apiURL}?city=${city}`).toPromise();
  }
  public async getRestaurantById(idRestaurant: string): Promise<Restaurant> {
    return this.httpClient.get<Restaurant>(`${this.apiURL}?id=${idRestaurant}`).toPromise();
  }
  public async getRestaurantsByName(name: string): Promise<Restaurant> {
    return this.httpClient.get<Restaurant>(`${this.apiURL}/${name}`).toPromise();
  }

  public async createRestaurant(restaurant: Restaurant) {
    return this.httpClient.post<Restaurant>(`${this.apiURL}/create`, restaurant).toPromise();
  }
}
