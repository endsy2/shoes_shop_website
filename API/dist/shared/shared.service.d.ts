import { PrismaService } from 'src/prisma/prisma.service';
export declare class SharedService {
    private prisma;
    constructor(prisma: PrismaService);
    displayProduct(): Promise<({
        brand: {
            id: number;
            name: string;
            createdAt: Date;
            imageUrl: string;
        };
        productVariants: ({
            productimage: {
                id: number;
                createdAt: Date;
                imageUrl: string;
                productVariantId: number;
            }[];
            discount: {
                id: number;
                name: string;
                createdAt: Date;
                description: string | null;
                discountType: import(".prisma/client").$Enums.discount_discountType;
                value: number;
                startDate: Date;
                endDate: Date;
            };
        } & {
            id: number;
            productId: number;
            color: string;
            size: string;
            price: number;
            discountId: number | null;
        })[];
    } & {
        id: number;
        name: string;
        brandId: number;
        categoryId: number;
        createdAt: Date;
        Description: string;
    })[]>;
    displayProductByID(id: number): Promise<{
        brand: {
            id: number;
            name: string;
            createdAt: Date;
            imageUrl: string;
        };
        productVariants: ({
            productimage: {
                id: number;
                createdAt: Date;
                imageUrl: string;
                productVariantId: number;
            }[];
            discount: {
                id: number;
                name: string;
                createdAt: Date;
                description: string | null;
                discountType: import(".prisma/client").$Enums.discount_discountType;
                value: number;
                startDate: Date;
                endDate: Date;
            };
        } & {
            id: number;
            productId: number;
            color: string;
            size: string;
            price: number;
            discountId: number | null;
        })[];
    } & {
        id: number;
        name: string;
        brandId: number;
        categoryId: number;
        createdAt: Date;
        Description: string;
    }>;
    displayProductByName({ name }: {
        name: any;
    }): Promise<({
        brand: {
            id: number;
            name: string;
            createdAt: Date;
            imageUrl: string;
        };
        productVariants: ({
            productimage: {
                id: number;
                createdAt: Date;
                imageUrl: string;
                productVariantId: number;
            }[];
            discount: {
                id: number;
                name: string;
                createdAt: Date;
                description: string | null;
                discountType: import(".prisma/client").$Enums.discount_discountType;
                value: number;
                startDate: Date;
                endDate: Date;
            };
        } & {
            id: number;
            productId: number;
            color: string;
            size: string;
            price: number;
            discountId: number | null;
        })[];
    } & {
        id: number;
        name: string;
        brandId: number;
        categoryId: number;
        createdAt: Date;
        Description: string;
    })[]>;
    getCategory(): Promise<{
        id: number;
        name: string;
    }[]>;
    getProductByCategory({ categoryName }: {
        categoryName: any;
    }): Promise<({
        brand: {
            id: number;
            name: string;
            createdAt: Date;
            imageUrl: string;
        };
        productVariants: ({
            productimage: {
                id: number;
                createdAt: Date;
                imageUrl: string;
                productVariantId: number;
            }[];
            discount: {
                id: number;
                name: string;
                createdAt: Date;
                description: string | null;
                discountType: import(".prisma/client").$Enums.discount_discountType;
                value: number;
                startDate: Date;
                endDate: Date;
            };
        } & {
            id: number;
            productId: number;
            color: string;
            size: string;
            price: number;
            discountId: number | null;
        })[];
    } & {
        id: number;
        name: string;
        brandId: number;
        categoryId: number;
        createdAt: Date;
        Description: string;
    })[]>;
    getDiscountedProducts(): Promise<({
        product_fk: {
            id: number;
            name: string;
            brandId: number;
            categoryId: number;
            createdAt: Date;
            Description: string;
        };
        productimage: {
            id: number;
            createdAt: Date;
            imageUrl: string;
            productVariantId: number;
        }[];
        discount: {
            id: number;
            name: string;
            createdAt: Date;
            description: string | null;
            discountType: import(".prisma/client").$Enums.discount_discountType;
            value: number;
            startDate: Date;
            endDate: Date;
        };
    } & {
        id: number;
        productId: number;
        color: string;
        size: string;
        price: number;
        discountId: number | null;
    })[]>;
    getOrderByCustomerName(firstName: string, lastName: string): Promise<({
        orderitem: ({
            productVariant: {
                product_fk: {
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
    displayBrand(): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        imageUrl: string;
    }[]>;
}
