import { PrismaService } from 'src/prisma/prisma.service';
export declare class SharedService {
    private prisma;
    constructor(prisma: PrismaService);
    displayProduct(): Promise<({
        brand: {
            id: number;
            createdAt: Date;
            name: string;
            imageUrl: string;
        };
        discount: {
            id: number;
            createdAt: Date;
            name: string;
            value: number;
            description: string | null;
            productId: number | null;
            discountType: import(".prisma/client").$Enums.discount_discountType;
            startDate: Date;
            endDate: Date;
        }[];
        productVariants: {
            id: number;
            price: number;
            color: string;
            productId: number;
        }[];
        productimage: {
            imageUrl: string;
        }[];
    } & {
        id: number;
        createdAt: Date;
        name: string;
        brandId: number;
        categoryId: number;
        Description: string;
    })[]>;
    displayProductByID(id: number): Promise<{
        brand: {
            id: number;
            createdAt: Date;
            name: string;
            imageUrl: string;
        };
        discount: {
            id: number;
            createdAt: Date;
            name: string;
            value: number;
            description: string | null;
            productId: number | null;
            discountType: import(".prisma/client").$Enums.discount_discountType;
            startDate: Date;
            endDate: Date;
        }[];
        productVariants: {
            id: number;
            price: number;
            color: string;
            productId: number;
        }[];
        productimage: {
            imageUrl: string;
        }[];
    } & {
        id: number;
        createdAt: Date;
        name: string;
        brandId: number;
        categoryId: number;
        Description: string;
    }>;
    displayProductByName({ name }: {
        name: any;
    }): Promise<({
        brand: {
            id: number;
            createdAt: Date;
            name: string;
            imageUrl: string;
        };
        discount: {
            id: number;
            createdAt: Date;
            name: string;
            value: number;
            description: string | null;
            productId: number | null;
            discountType: import(".prisma/client").$Enums.discount_discountType;
            startDate: Date;
            endDate: Date;
        }[];
        productVariants: {
            id: number;
            price: number;
            color: string;
            productId: number;
        }[];
        productimage: {
            imageUrl: string;
        }[];
    } & {
        id: number;
        createdAt: Date;
        name: string;
        brandId: number;
        categoryId: number;
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
            createdAt: Date;
            name: string;
            imageUrl: string;
        };
        discount: {
            id: number;
            createdAt: Date;
            name: string;
            value: number;
            description: string | null;
            productId: number | null;
            discountType: import(".prisma/client").$Enums.discount_discountType;
            startDate: Date;
            endDate: Date;
        }[];
        productVariants: {
            id: number;
            price: number;
            color: string;
            productId: number;
        }[];
        productimage: {
            id: number;
            createdAt: Date;
            productId: number;
            imageUrl: string;
        }[];
    } & {
        id: number;
        createdAt: Date;
        name: string;
        brandId: number;
        categoryId: number;
        Description: string;
    })[]>;
    getSortPrice({ min, max }: {
        min: any;
        max: any;
    }): Promise<({
        discount: {
            id: number;
            createdAt: Date;
            name: string;
            value: number;
            description: string | null;
            productId: number | null;
            discountType: import(".prisma/client").$Enums.discount_discountType;
            startDate: Date;
            endDate: Date;
        }[];
        productVariants: {
            id: number;
            price: number;
            color: string;
            productId: number;
        }[];
    } & {
        id: number;
        createdAt: Date;
        name: string;
        brandId: number;
        categoryId: number;
        Description: string;
    })[]>;
}
