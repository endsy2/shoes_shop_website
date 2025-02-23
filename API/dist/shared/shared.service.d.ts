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
        productimage: {
            imageUrl: string;
        }[];
        productVariants: ({
            discount: {
                id: number;
                name: string;
                createdAt: Date;
                description: string | null;
                discountType: import(".prisma/client").$Enums.discount_discountType;
                value: number;
                startDate: Date;
                endDate: Date;
                productVariantId: number | null;
            }[];
        } & {
            id: number;
            productId: number;
            color: string;
            size: string;
            price: number;
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
        productimage: {
            imageUrl: string;
        }[];
        productVariants: ({
            discount: {
                id: number;
                name: string;
                createdAt: Date;
                description: string | null;
                discountType: import(".prisma/client").$Enums.discount_discountType;
                value: number;
                startDate: Date;
                endDate: Date;
                productVariantId: number | null;
            }[];
        } & {
            id: number;
            productId: number;
            color: string;
            size: string;
            price: number;
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
        productimage: {
            imageUrl: string;
        }[];
        productVariants: ({
            discount: {
                id: number;
                name: string;
                createdAt: Date;
                description: string | null;
                discountType: import(".prisma/client").$Enums.discount_discountType;
                value: number;
                startDate: Date;
                endDate: Date;
                productVariantId: number | null;
            }[];
        } & {
            id: number;
            productId: number;
            color: string;
            size: string;
            price: number;
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
        productimage: {
            id: number;
            createdAt: Date;
            productId: number;
            imageUrl: string;
        }[];
        productVariants: ({
            discount: {
                id: number;
                name: string;
                createdAt: Date;
                description: string | null;
                discountType: import(".prisma/client").$Enums.discount_discountType;
                value: number;
                startDate: Date;
                endDate: Date;
                productVariantId: number | null;
            }[];
        } & {
            id: number;
            productId: number;
            color: string;
            size: string;
            price: number;
        })[];
    } & {
        id: number;
        name: string;
        brandId: number;
        categoryId: number;
        createdAt: Date;
        Description: string;
    })[]>;
    getSortPrice({ min, max }: {
        min: any;
        max: any;
    }): Promise<{
        finalPrice: any;
        productVariants: ({
            discount: {
                id: number;
                name: string;
                createdAt: Date;
                description: string | null;
                discountType: import(".prisma/client").$Enums.discount_discountType;
                value: number;
                startDate: Date;
                endDate: Date;
                productVariantId: number | null;
            }[];
        } & {
            id: number;
            productId: number;
            color: string;
            size: string;
            price: number;
        })[];
        id: number;
        name: string;
        brandId: number;
        categoryId: number;
        createdAt: Date;
        Description: string;
    }[]>;
}
