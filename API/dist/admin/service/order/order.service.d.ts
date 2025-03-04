import { PrismaService } from './../../../prisma/prisma.service';
export declare class OrderService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    displayOrder(): Promise<({
        orderitem: ({
            productVariant: {
                product_fk: {
                    brand: {
                        id: number;
                        createdAt: Date;
                        name: string;
                        imageUrl: string;
                    };
                    category: {
                        id: number;
                        name: string;
                    };
                } & {
                    id: number;
                    createdAt: Date;
                    name: string;
                    brandId: number;
                    categoryId: number;
                    Description: string;
                };
            } & {
                id: number;
                productId: number;
                color: string;
                size: string;
                price: number;
            };
        } & {
            id: number;
            createdAt: Date;
            orderId: number;
            productVariantId: number;
            quantity: number;
            amount: number;
        })[];
    } & {
        id: number;
        totalAmount: number;
        status: import(".prisma/client").$Enums.order_status;
        customerId: number;
        createdAt: Date;
    })[]>;
    displayOrderByID(id: any): Promise<{
        orderitem: ({
            productVariant: {
                product_fk: {
                    productVariants: {
                        id: number;
                        productId: number;
                        color: string;
                        size: string;
                        price: number;
                    }[];
                    brand: {
                        id: number;
                        createdAt: Date;
                        name: string;
                        imageUrl: string;
                    };
                    category: {
                        id: number;
                        name: string;
                    };
                } & {
                    id: number;
                    createdAt: Date;
                    name: string;
                    brandId: number;
                    categoryId: number;
                    Description: string;
                };
            } & {
                id: number;
                productId: number;
                color: string;
                size: string;
                price: number;
            };
        } & {
            id: number;
            createdAt: Date;
            orderId: number;
            productVariantId: number;
            quantity: number;
            amount: number;
        })[];
    } & {
        id: number;
        totalAmount: number;
        status: import(".prisma/client").$Enums.order_status;
        customerId: number;
        createdAt: Date;
    }>;
    deleteOrder(id: any): Promise<{
        message: string;
    }>;
    deleteOrderItems(id: any): Promise<{
        message: string;
    }>;
    checkout(createOrderDTO: any): Promise<void>;
}
