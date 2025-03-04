export class CreateOrderDTO{
    customerId :number;
    orderItems:{productVariantId:number,quantity:number,price:number}[];
}