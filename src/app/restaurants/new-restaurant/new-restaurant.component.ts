import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import { Restaurant } from '../restaurants.model';

@Component({
  selector: 'app-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.css']
})
export class NewRestaurantComponent implements OnInit {
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
    typology: ''
  };

  constructor(private restService: RestaurantsService) { }

  public createRestaurant() {
    this.restService.createRestaurant(this.restaurant);
  }

  ngOnInit() {
  }

}
