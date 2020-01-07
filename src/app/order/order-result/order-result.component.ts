import { Component, OnInit } from '@angular/core';
import { Order } from 'modules/orderInterface';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-result',
  templateUrl: './order-result.component.html',
  styleUrls: ['./order-result.component.css']
})
export class OrderResultComponent implements OnInit {
  order: Order = {};
  constructor(public orderService: OrderService, private router: Router) { }

  ngOnInit() {
    this.order = this.orderService.newOrder;
    setTimeout(() => {
      this.router.navigate(['./']);
  }, 7000); // 7s
  }

}
