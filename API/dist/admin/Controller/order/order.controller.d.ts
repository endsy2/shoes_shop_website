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
                        id: number;
                        name: string;
                        createdAt: Date;
                        imageUrl: string;
                    };
                    category: {
                        id: number;
                        name: string;
                    };
                } & {
                    id: number;
                    name: string;
                    brandId: number;
                    categoryId: number;
                    createdAt: Date;
                    Description: string;
                };
            } & {
                id: number;
                productId: number;
                color: string;
                size: string;
                price: number;
                discountId: number | null;
            };
        } & {
            id: number;
            createdAt: Date;
            productVariantId: number;
            orderId: number;
            quantity: number;
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
                        id: number;
                        name: string;
                        createdAt: Date;
                        imageUrl: string;
                    };
                    productVariants: {
                        id: number;
                        productId: number;
                        color: string;
                        size: string;
                        price: number;
                        discountId: number | null;
                    }[];
                    category: {
                        id: number;
                        name: string;
                    };
                } & {
                    id: number;
                    name: string;
                    brandId: number;
                    categoryId: number;
                    createdAt: Date;
                    Description: string;
                };
            } & {
                id: number;
                productId: number;
                color: string;
                size: string;
                price: number;
                discountId: number | null;
            };
        } & {
            id: number;
            createdAt: Date;
            productVariantId: number;
            orderId: number;
            quantity: number;
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
