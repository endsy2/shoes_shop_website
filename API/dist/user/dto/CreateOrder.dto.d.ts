declare class OrderItemDTO {
    productVariantId: number;
    quantity: number;
    price: number;
}
export declare class CreateOrderDTO {
    customerId: number;
    orderItems: OrderItemDTO[];
}
export {};
