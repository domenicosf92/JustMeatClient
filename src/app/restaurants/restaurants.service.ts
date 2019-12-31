import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Restaurant } from './restaurants.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  private apiURL = `http://localhost:3001/restaurants`;
  constructor(private httpClient: HttpClient) { }
  
  public getRestaurants() : Promise<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(`${this.apiURL}`).toPromise();
  }

  public async getRestaurantsByCity(city:string) : Promise<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(`${this.apiURL}/?city=${city}`).toPromise();
  }
  public getRestaurantsByName(name:string) : Promise<Restaurant>{
    return this.httpClient.get<Restaurant>(`${this.apiURL}/`+name).toPromise();
  }
}
