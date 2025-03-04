import { PrismaService } from './../../../prisma/prisma.service';
export declare class OrderService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    displayOrderByID(id: any): Promise<{
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
    deleteOrder(id: any): Promise<{
        message: string;
    }>;
    deleteOrderItems(id: any): Promise<{
        message: string;
    }>;
}
