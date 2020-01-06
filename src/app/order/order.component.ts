import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { Order } from 'modules/orderInterface';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order: Order = {};

  constructor(public orderService: OrderService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.order = this.orderService.newOrder;
  }

  sendOrder() {
      this.orderService.createOrder(this.order);
      this.router.navigate(['orders/order_confirmed']);
  }

}
