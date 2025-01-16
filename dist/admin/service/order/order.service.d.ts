import { PrismaService } from './../../../prisma/prisma.service';
export declare class OrderService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    displayOrder(): Promise<({
        orderitem: ({
            product: {
                brand: {
                    id: number;
                    createdAt: Date;
                    name: string;
                    imageUrl: string;
                };
                productVariants: {
                    id: number;
                    product_id: number;
                    color: string;
                    price: number;
                }[];
                category: {
                    id: number;
                    name: string;
                };
            } & {
                id: number;
                createdAt: Date;
                name: string;
                brandId: number;
                categoryID: number;
                Description: string;
            };
        } & {
            id: number;
            createdAt: Date;
            orderId: number;
            productId: number;
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
            product: {
                brand: {
                    id: number;
                    createdAt: Date;
                    name: string;
                    imageUrl: string;
                };
                productVariants: {
                    id: number;
                    product_id: number;
                    color: string;
                    price: number;
                }[];
                category: {
                    id: number;
                    name: string;
                };
            } & {
                id: number;
                createdAt: Date;
                name: string;
                brandId: number;
                categoryID: number;
                Description: string;
            };
        } & {
            id: number;
            createdAt: Date;
            orderId: number;
            productId: number;
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
}
