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
  userOrders: Array<Order>;
  restaurant: Array<Restaurant>;

  constructor(private orderService: OrderService,
              private auth: AuthService,
              private restaurantsService: RestaurantsService) { }

  async ngOnInit() {
    const token = this.auth.getToken();
    const decoded = jwt_decode(token) as any;
    this.userId = decoded.subject;
    this.userOrders =  await this.orderService.getOrdersByUserId(this.userId);
    if (decoded.isAdmin === true) {
      this.userOrders = await this.orderService.getOrders();
    }
    this.restaurant = await this.restaurantsService.getRestaurants();
  }
}
