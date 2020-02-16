import { Component, OnInit} from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import { Restaurant, Plate } from '../restaurants.model';
import {ActivatedRoute, Router} from '@angular/router';
import { Order, OrderList } from 'modules/orderInterface';
import * as jwt_decode from 'jwt-decode';
import { AuthService } from 'src/app/auth.service';
import { OrderService } from 'src/app/order/order.service';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})

export class RestaurantComponent implements OnInit {
  order: Order = {};
  plates: OrderList[] = [];
  restaurant: Restaurant;
  public restaurantId: string;
  userId: string;
  constructor(public restaurantsService: RestaurantsService ,
              public orderService: OrderService,
              private route: ActivatedRoute,
              private auth: AuthService,
              private router: Router) {}

  async ngOnInit() {
    this.restaurantId = this.route.snapshot.paramMap.get('restaurant');
    this.restaurant = await this.restaurantsService.getRestaurantById(this.restaurantId);
    const token = this.auth.getToken();
    const decoded = jwt_decode(token) as any;
    this.userId = decoded.subject;
  }

  addPlate(plate: OrderList) {
    this.plates.push(plate);
  }
  deletePlate(plate: OrderList) {
    // tslint:disable-next-line: no-shadowed-variable
    const index = this.plates.findIndex((i, index) => {
      if (i.name === plate.name) {
       return index; }
    });
    this.plates.splice(index, 1);
  }
  getTotalAmount() {
    let totalAmount = 0;
    for (const item of this.plates) {
      totalAmount += item.price;
    }
    return totalAmount;
  }

  sendOrder() {
    if (this.plates) {
      this.order.user = this.userId;
      this.order.restaurant = this.restaurant._id;
      const timestampNow = new Date();
      const date = timestampNow.getDate() + '-' + (timestampNow.getMonth() + 1) + '-' + timestampNow.getFullYear();
      const time = timestampNow.getHours() + ':' + timestampNow.getMinutes() + ':' + timestampNow.getSeconds();
      const dateOrder = date + ' ' + time;
      this.order.date = dateOrder;
      this.order.orderItems = this.plates;
      this.order.totalAmount = this.getTotalAmount();
      this.order.statusOrder = 'NEW';
      this.orderService.newOrder = this.order;
      console.log(this.order);
      this.router.navigate(['/orders/create']);
    }
  }
}
