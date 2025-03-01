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
                price: number;
                color: string;
                size: string;
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
        totalAmount: number;
        status: import(".prisma/client").$Enums.order_status;
        customerId: number;
        createdAt: Date;
    })[]>;
    displayOrderByID(id: any): Promise<{
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
                    productVariants: {
                        id: number;
                        price: number;
                        color: string;
                        size: string;
                        productId: number;
                    }[];
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
                price: number;
                color: string;
                size: string;
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
        totalAmount: number;
        status: import(".prisma/client").$Enums.order_status;
        customerId: number;
        createdAt: Date;
    }>;
}
