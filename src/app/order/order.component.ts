import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { Order, OrderList } from 'modules/orderInterface';
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
              private router: Router) { }

  ngOnInit() {
    this.order = this.orderService.newOrder;
  }

  async sendOrder() {
    if (!this.order || this.order.orderItems.length !== 0) {
      this.orderService.newOrder = await this.orderService.createOrder(this.order);
      this.router.navigate(['orders/order_confirmed']);
    }
  }
  deletePlate(plate: OrderList) {
    // tslint:disable-next-line: no-shadowed-variable
    const index = this.order.orderItems.findIndex((i, index) => {
      if (i.namePlate === plate.namePlate) {
       return index; }
    });
    this.order.orderItems.splice(index, 1);
    this.order.totalAmount -= plate.price;
  }

}
