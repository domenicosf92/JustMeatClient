import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import { Restaurant, Plate } from '../restaurants.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.css']
})
export class NewRestaurantComponent implements OnInit {
  restaurant: Restaurant = {

  };

  plates: Plate[] =[{
    name: "",
    price: undefined
  }];

  constructor(private restService: RestaurantsService, private router: Router) { }

  public createRestaurant() {
    this.restaurant.plates = this.plates;
    this.restService.createRestaurant(this.restaurant);
    //this.router.navigate(['/']);
  }

  ngOnInit() {
  }
  addPlate() {
    this.plates.push({
      name: '',
      price: undefined
    })
  }
  removePlate(i: number) {
    this.plates.splice(i, 1);
  }

}
