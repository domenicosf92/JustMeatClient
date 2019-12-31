import { Component, OnInit } from '@angular/core';

import {RestaurantsService} from './restaurants.service'
import { Restaurant } from './restaurants.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  providers:[RestaurantsService]
})
export class RestaurantsComponent implements OnInit {
  public restaurants : Restaurant[] = [];
  public city : string;
  constructor(private route: ActivatedRoute ,
    private restaurantsService : RestaurantsService) { }

  ngOnInit() {
    this.city = this.route.snapshot.paramMap.get('city').toLowerCase();
    this.restaurantsService.getRestaurantsByCity(this.capitalizeFirstLetter(this.city)).then(results => {
      this.restaurants = results;
    })
  }
  capitalizeFirstLetter(city:string) {
    return city.charAt(0).toUpperCase() + city.slice(1);
}
}
