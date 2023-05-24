export default class CreateOrderDto {
  constructor(order) {
    this.number = Date.now() + Math.floor(Math.random() + 1000 + 1);
    this.business = order.business;
    this.user = order.user;
    this.status = "pending";
    this.products = order.products;
  }
}
