import { Component, OnInit} from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import { Restaurant } from '../restaurants.model';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})

export class RestaurantComponent implements OnInit {
  restaurant: Restaurant = {
    id: '',
    name: '',
    address: '',
    city: '',
    email: '',
    plate: [{
      name: '',
      price: 0
    }],
    rating: '',
    typology: []
  };
  public restaurantName: string;
  constructor(public restaurantsService: RestaurantsService ,
              private route: ActivatedRoute) {}

  async ngOnInit() {
    this.restaurantName = this.route.snapshot.paramMap.get('restaurant');
    this.restaurant = await this.restaurantsService.getRestaurantsByName(this.restaurantName);
  }
}
