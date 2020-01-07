import { Injectable } from '@angular/core';
import { Order } from '../../../modules/orderInterface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  newOrder: Order = {};
  orderUrl = 'http://localhost:3006/orders';

  constructor(private httpClient: HttpClient) { }

  public getOrdersByUserId(userId: string): Promise<Order[]> {
    return this.httpClient.get<Order[]>(`${this.orderUrl}/user/${userId}`).toPromise();
  }
  public getOrders(): Promise<Order[]> {
    return this.httpClient.get<Order[]>(`${this.orderUrl}`).toPromise();
  }
  public async createOrder(order): Promise<Order> {
    return await this.httpClient.post<Order>(`${this.orderUrl}/create`, order).toPromise();
  }

  public updateStatus(orderID: string) {
    this.httpClient.put<string>(`${this.orderUrl}/${orderID}/acceptOrder`, {}).toPromise();
  }
}
