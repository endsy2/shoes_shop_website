import { PrismaService } from 'src/prisma/prisma.service';
export declare class SharedService {
    private prisma;
    constructor(prisma: PrismaService);
    displayProduct(): Promise<({
        brand: {
            name: string;
            id: number;
            imageUrl: string;
            createdAt: Date;
        };
        productVariants: ({
            discount: {
                value: number;
                name: string;
                description: string | null;
                id: number;
                createdAt: Date;
                productVariantId: number | null;
                discountType: import(".prisma/client").$Enums.discount_discountType;
                startDate: Date;
                endDate: Date;
            }[];
            productimage: {
                id: number;
                imageUrl: string;
                createdAt: Date;
                productVariantId: number;
            }[];
        } & {
            color: string;
            price: number;
            size: string;
            id: number;
            productId: number;
        })[];
    } & {
        name: string;
        id: number;
        createdAt: Date;
        brandId: number;
        categoryId: number;
        Description: string;
    })[]>;
    displayProductByID(id: number): Promise<{
        brand: {
            name: string;
            id: number;
            imageUrl: string;
            createdAt: Date;
        };
        productVariants: ({
            discount: {
                value: number;
                name: string;
                description: string | null;
                id: number;
                createdAt: Date;
                productVariantId: number | null;
                discountType: import(".prisma/client").$Enums.discount_discountType;
                startDate: Date;
                endDate: Date;
            }[];
            productimage: {
                id: number;
                imageUrl: string;
                createdAt: Date;
                productVariantId: number;
            }[];
        } & {
            color: string;
            price: number;
            size: string;
            id: number;
            productId: number;
        })[];
    } & {
        name: string;
        id: number;
        createdAt: Date;
        brandId: number;
        categoryId: number;
        Description: string;
    }>;
    displayProductByName({ name }: {
        name: any;
    }): Promise<({
        brand: {
            name: string;
            id: number;
            imageUrl: string;
            createdAt: Date;
        };
        productVariants: ({
            discount: {
                value: number;
                name: string;
                description: string | null;
                id: number;
                createdAt: Date;
                productVariantId: number | null;
                discountType: import(".prisma/client").$Enums.discount_discountType;
                startDate: Date;
                endDate: Date;
            }[];
            productimage: {
                id: number;
                imageUrl: string;
                createdAt: Date;
                productVariantId: number;
            }[];
        } & {
            color: string;
            price: number;
            size: string;
            id: number;
            productId: number;
        })[];
    } & {
        name: string;
        id: number;
        createdAt: Date;
        brandId: number;
        categoryId: number;
        Description: string;
    })[]>;
    getCategory(): Promise<{
        name: string;
        id: number;
    }[]>;
    getProductByCategory({ categoryName }: {
        categoryName: any;
    }): Promise<({
        brand: {
            name: string;
            id: number;
            imageUrl: string;
            createdAt: Date;
        };
        productVariants: ({
            discount: {
                value: number;
                name: string;
                description: string | null;
                id: number;
                createdAt: Date;
                productVariantId: number | null;
                discountType: import(".prisma/client").$Enums.discount_discountType;
                startDate: Date;
                endDate: Date;
            }[];
            productimage: {
                id: number;
                imageUrl: string;
                createdAt: Date;
                productVariantId: number;
            }[];
        } & {
            color: string;
            price: number;
            size: string;
            id: number;
            productId: number;
        })[];
    } & {
        name: string;
        id: number;
        createdAt: Date;
        brandId: number;
        categoryId: number;
        Description: string;
    })[]>;
    getSortPrice({ min, max }: {
        min: any;
        max: any;
    }): Promise<{
        finalPrice: any;
        productVariants: ({
            discount: {
                value: number;
                name: string;
                description: string | null;
                id: number;
                createdAt: Date;
                productVariantId: number | null;
                discountType: import(".prisma/client").$Enums.discount_discountType;
                startDate: Date;
                endDate: Date;
            }[];
        } & {
            color: string;
            price: number;
            size: string;
            id: number;
            productId: number;
        })[];
        name: string;
        id: number;
        createdAt: Date;
        brandId: number;
        categoryId: number;
        Description: string;
    }[]>;
    getDiscountedProducts(): Promise<({
        discount: {
            value: number;
            name: string;
            description: string | null;
            id: number;
            createdAt: Date;
            productVariantId: number | null;
            discountType: import(".prisma/client").$Enums.discount_discountType;
            startDate: Date;
            endDate: Date;
        }[];
        product_fk: {
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
    })[]>;
    getOrderByCustomerName(firstName: string, lastName: string): Promise<({
        orderitem: ({
            productVariant: {
                product_fk: {
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
}
