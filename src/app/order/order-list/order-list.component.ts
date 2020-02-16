import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from 'modules/orderInterface';
import { AuthService } from '../../auth.service';
import * as jwt_decode from 'jwt-decode';
import { RestaurantsService } from 'src/app/restaurants/restaurants.service';
import { Restaurant } from 'src/app/restaurants/restaurants.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  userId: string;
  hideMe = [];
  orders: Order[] = [];
  restaurants: Restaurant[] = [];

  constructor(private orderService: OrderService,
              private auth: AuthService,
              private restaurantsService: RestaurantsService) { }

  async ngOnInit() {
    const token = this.auth.getToken();
    const decoded = jwt_decode(token) as any;
    this.userId = decoded.subject;
    if (decoded.isAdmin === true) {
      this.orders = await this.orderService.getOrders();
    } else {
      this.orders =  await this.orderService.getOrdersByUserId(this.userId);
    }
    this.restaurants = await this.restaurantsService.getRestaurants();
  }

  changeOrderStatus(orderId: string) {
    this.orderService.updateStatus(orderId);
    window.location.reload();
  }

  getRestaurantName(id: string) {
    /* this.restaurant.find(value => {
      if(value.id === id) return value.name;
    }) */
    for (const rest of this.restaurants) {
      if (rest._id === id) { return rest.name; }
    }
  }
}
