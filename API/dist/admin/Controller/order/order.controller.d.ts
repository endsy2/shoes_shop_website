import { OrderService } from 'src/admin/service/order/order.service';
import { ProductService } from 'src/admin/service/product/product.service';
import { SharedService } from 'src/shared/shared.service';
export declare class OrderController {
    private readonly sharedService;
    private readonly orderService;
    private readonly productService;
    constructor(sharedService: SharedService, orderService: OrderService, productService: ProductService);
    displayOrder(): Promise<({
        orderitem: ({
            productVariant: {
                product_fk: {
                    brand: {
                        name: string;
                        id: number;
                        imageUrl: string;
                        createdAt: Date;
                    };
                    category: {
                        name: string;
                        id: number;
                    };
                } & {
                    name: string;
                    id: number;
                    createdAt: Date;
                    brandId: number;
                    categoryId: number;
                    Description: string;
                };
            } & {
                color: string;
                price: number;
                size: string;
                id: number;
                productId: number;
            };
        } & {
            id: number;
            createdAt: Date;
            productVariantId: number;
            quantity: number;
            orderId: number;
            amount: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        totalAmount: number;
        status: import(".prisma/client").$Enums.order_status;
        customerId: number;
    })[]>;
    displayOrderByID(id: number): Promise<{
        orderitem: ({
            productVariant: {
                product_fk: {
                    brand: {
                        name: string;
                        id: number;
                        imageUrl: string;
                        createdAt: Date;
                    };
                    category: {
                        name: string;
                        id: number;
                    };
                    productVariants: {
                        color: string;
                        price: number;
                        size: string;
                        id: number;
                        productId: number;
                    }[];
                } & {
                    name: string;
                    id: number;
                    createdAt: Date;
                    brandId: number;
                    categoryId: number;
                    Description: string;
                };
            } & {
                color: string;
                price: number;
                size: string;
                id: number;
                productId: number;
            };
        } & {
            id: number;
            createdAt: Date;
            productVariantId: number;
            quantity: number;
            orderId: number;
            amount: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        totalAmount: number;
        status: import(".prisma/client").$Enums.order_status;
        customerId: number;
    }>;
    deleteOrder(id: number): Promise<{
        message: string;
    }>;
    deleteOrderItem(id: number): Promise<{
        message: string;
    }>;
    displayOrderByName(firstName: string, LastName: string): Promise<void>;
}
