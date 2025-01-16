import { PrismaService } from 'src/prisma/prisma.service';
export declare class SharedService {
    private prisma;
    constructor(prisma: PrismaService);
    displayProduct(): Promise<({
        discount: {
            id: number;
            createdAt: Date;
            name: string;
            productId: number | null;
            description: string | null;
            discountType: import(".prisma/client").$Enums.discount_discountType;
            value: number;
            startDate: Date;
            endDate: Date;
        }[];
        brand: {
            id: number;
            createdAt: Date;
            name: string;
            imageUrl: string;
        };
        productimage: {
            imageUrl: string;
        }[];
        productVariants: {
            id: number;
            product_id: number;
            color: string;
            price: number;
        }[];
    } & {
        id: number;
        createdAt: Date;
        name: string;
        brandId: number;
        categoryID: number;
        Description: string;
    })[]>;
    displayProductByID(id: number): Promise<{
        discount: {
            id: number;
            createdAt: Date;
            name: string;
            productId: number | null;
            description: string | null;
            discountType: import(".prisma/client").$Enums.discount_discountType;
            value: number;
            startDate: Date;
            endDate: Date;
        }[];
        brand: {
            id: number;
            createdAt: Date;
            name: string;
            imageUrl: string;
        };
        productimage: {
            imageUrl: string;
        }[];
        productVariants: {
            id: number;
            product_id: number;
            color: string;
            price: number;
        }[];
    } & {
        id: number;
        createdAt: Date;
        name: string;
        brandId: number;
        categoryID: number;
        Description: string;
    }>;
    displayProductByName(name: string): Promise<({
        discount: {
            id: number;
            createdAt: Date;
            name: string;
            productId: number | null;
            description: string | null;
            discountType: import(".prisma/client").$Enums.discount_discountType;
            value: number;
            startDate: Date;
            endDate: Date;
        }[];
        brand: {
            id: number;
            createdAt: Date;
            name: string;
            imageUrl: string;
        };
        productimage: {
            imageUrl: string;
        }[];
        productVariants: {
            id: number;
            product_id: number;
            color: string;
            price: number;
        }[];
    } & {
        id: number;
        createdAt: Date;
        name: string;
        brandId: number;
        categoryID: number;
        Description: string;
    })[]>;
    getCategory(): Promise<{
        id: number;
        name: string;
    }[]>;
}
