import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { Order } from 'modules/orderInterface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order: Order = {};

  constructor(public orderService: OrderService) { }

  ngOnInit() {
    this.order = this.orderService.newOrder;
  }

}
