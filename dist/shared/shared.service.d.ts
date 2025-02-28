import { PrismaService } from 'src/prisma/prisma.service';
export declare class SharedService {
    private prisma;
    constructor(prisma: PrismaService);
    displayProduct(): Promise<{
        brand: {
            name: string;
        };
        category: {
            name: string;
        };
        id: number;
        name: string;
        productVariants: {
            id: number;
            price: number;
            color: string;
            size: string;
            discounts: {
                name: string;
                value: number;
            }[];
            productImages: {
                imageUrl: string;
            }[];
        }[];
    }[]>;
    displayProductByID(id: number): Promise<{
        brand: {
            name: string;
        };
        category: {
            name: string;
        };
        id: number;
        name: string;
        productVariants: {
            id: number;
            price: number;
            color: string;
            size: string;
            discounts: {
                name: string;
                value: number;
            }[];
            productImages: {
                imageUrl: string;
            }[];
        }[];
    }>;
    displayProductByName({ name }: {
        name: any;
    }): Promise<{
        brand: {
            name: string;
        };
        category: {
            name: string;
        };
        id: number;
        name: string;
        productVariants: {
            id: number;
            price: number;
            color: string;
            size: string;
            discounts: {
                name: string;
                value: number;
            }[];
            productImages: {
                imageUrl: string;
            }[];
        }[];
    }>;
    getCategory(): Promise<{
        id: number;
        name: string;
    }[]>;
    getProductByCategory({ categoryName }: {
        categoryName: any;
    }): Promise<{
        brand: {
            name: string;
        };
        category: {
            name: string;
        };
        id: number;
        name: string;
        productVariants: {
            id: number;
            price: number;
            color: string;
            size: string;
            discounts: {
                name: string;
                value: number;
            }[];
            productImages: {
                imageUrl: string;
            }[];
        }[];
    }[]>;
    displayBrand(): Promise<{
        id: number;
        createdAt: Date;
        name: string;
        imageUrl: string;
    }[]>;
}
