import { Component, OnInit } from '@angular/core';
import { Order } from 'modules/orderInterface';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-result',
  templateUrl: './order-result.component.html',
  styleUrls: ['./order-result.component.css']
})
export class OrderResultComponent implements OnInit {
  order: Order = {};
  constructor(public orderService: OrderService) { }

  ngOnInit() {
    this.order = this.orderService.newOrder;
  }

}
