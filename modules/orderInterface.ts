export interface OrderList {
    quantity: number;
    namePlate: string;
    price: number;
}
export interface Order {
    id: string;
    userId: string;
    restaurantId: string;
    date: string;
    shippingAddress: string;
    orderItems: Array<OrderList>;
    totalAmount: number;
    rating: number;
    statusOrder: boolean;
}