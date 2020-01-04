import { Component, OnInit} from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import { Restaurant, Plate } from '../restaurants.model';
import {ActivatedRoute} from '@angular/router';
import { Order, OrderList } from 'modules/orderInterface';
import * as jwt_decode from 'jwt-decode';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})

export class RestaurantComponent implements OnInit {
  order : Order ;
  plates : OrderList[] = [];
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
  public restaurantName: string;
  userId: string;
  constructor(public restaurantsService: RestaurantsService ,
              private route: ActivatedRoute,
              private auth: AuthService) {}

  async ngOnInit() {
    this.restaurantName = this.route.snapshot.paramMap.get('restaurant');
    this.restaurant = await this.restaurantsService.getRestaurantsByName(this.restaurantName);
    const token = this.auth.getToken();
    const decoded = jwt_decode(token) as any;
    this.userId = decoded.subject;
  }

  addPlate(plate:OrderList){
    this.plates.push(plate);
  }
  deletePlate(plate:OrderList){
    var index =this.plates.findIndex((i,index) =>{
      if(i.namePlate ==plate.namePlate){
       return index}
    });
    this.plates.splice(index,1);
  }
  getTotalAmount(){
    var totalAmount=0;
    for(let item of this.plates){
      totalAmount +=item.price;
    }
    return totalAmount;
  }

  newOrder(order : Order){
    var timestampNow = new Date();
    var date = timestampNow.getDate() + "-" + (timestampNow.getMonth()+1) + "-" + timestampNow.getFullYear();
    var time = timestampNow.getHours() + ":" + timestampNow.getMinutes() + ":" + timestampNow.getSeconds();
    var dateOrder = date + " " + time;
    var uuid = new uuid();
    order.date = dateOrder;
    order.id =uuid;
    order.restaurantId = this.restaurant.id;
    order.userId = this.userId;
  }
}
