import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import { Restaurant } from '../restaurants.model';
import { Router } from '@angular/router';

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
      price: null
    },
    {
      name: '',
      price: null
    },
    {
      name: '',
      price: null
    },
    {
      name: '',
      price: null
    },
    {
      name: '',
      price: null
    }],
    rating: null,
    typology: ''
  };

  constructor(private restService: RestaurantsService, private router: Router) { }

  public createRestaurant() {
    this.restService.createRestaurant(this.restaurant);
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
