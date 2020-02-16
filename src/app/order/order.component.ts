import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { Order, OrderList } from 'modules/orderInterface';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order: Order = {};
  shipmentAddress: string;
  returnUrl: string;

  constructor(public orderService: OrderService,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    this.order = this.orderService.newOrder;
  }

  async sendOrder() {
    this.order.shippingAddress = this.shipmentAddress;
    if (!this.order || this.order.orderItems.length !== 0) {
      this.orderService.newOrder = await this.orderService.createOrder(this.order);
      this.router.navigate(['orders/order_confirmed']);
    }
  }
  deletePlate(plate: OrderList) {
    // tslint:disable-next-line: no-shadowed-variable
    const index = this.order.orderItems.findIndex((i, index) => {
      if (i.name === plate.name) {
       return index; }
    });
    this.order.orderItems.splice(index, 1);
    this.order.totalAmount -= plate.price;
  }

  backToRestaurant() {
    this.location.back();
  }

}
