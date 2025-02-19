import { SharedService } from 'src/shared/shared.service';
import { UserService } from './user.service';
export declare class UserController {
    private readonly shareService;
    private readonly userService;
    constructor(shareService: SharedService, userService: UserService);
    displayAllProduct(): Promise<({
        discount: {
            id: number;
            name: string;
            createdAt: Date;
            productId: number | null;
            description: string | null;
            discountType: import(".prisma/client").$Enums.discount_discountType;
            value: number;
            startDate: Date;
            endDate: Date;
        }[];
        brand: {
            id: number;
            name: string;
            createdAt: Date;
            imageUrl: string;
        };
        productimage: {
            imageUrl: string;
        }[];
        productVariants: {
            id: number;
            productId: number;
            color: string;
            price: number;
        }[];
    } & {
        id: number;
        name: string;
        brandId: number;
        categoryId: number;
        createdAt: Date;
        Description: string;
    })[]>;
    displayProductByName(name: string): Promise<({
        discount: {
            id: number;
            name: string;
            createdAt: Date;
            productId: number | null;
            description: string | null;
            discountType: import(".prisma/client").$Enums.discount_discountType;
            value: number;
            startDate: Date;
            endDate: Date;
        }[];
        brand: {
            id: number;
            name: string;
            createdAt: Date;
            imageUrl: string;
        };
        productimage: {
            imageUrl: string;
        }[];
        productVariants: {
            id: number;
            productId: number;
            color: string;
            price: number;
        }[];
    } & {
        id: number;
        name: string;
        brandId: number;
        categoryId: number;
        createdAt: Date;
        Description: string;
    })[]>;
    displayProductByCategory(category: string): Promise<({
        discount: {
            id: number;
            name: string;
            createdAt: Date;
            productId: number | null;
            description: string | null;
            discountType: import(".prisma/client").$Enums.discount_discountType;
            value: number;
            startDate: Date;
            endDate: Date;
        }[];
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
        productVariants: {
            id: number;
            productId: number;
            color: string;
            price: number;
        }[];
    } & {
        id: number;
        name: string;
        brandId: number;
        categoryId: number;
        createdAt: Date;
        Description: string;
    })[]>;
    displayProductBySortPrice(max: number, min: number): Promise<({
        discount: {
            id: number;
            name: string;
            createdAt: Date;
            productId: number | null;
            description: string | null;
            discountType: import(".prisma/client").$Enums.discount_discountType;
            value: number;
            startDate: Date;
            endDate: Date;
        }[];
        productVariants: {
            id: number;
            productId: number;
            color: string;
            price: number;
        }[];
    } & {
        id: number;
        name: string;
        brandId: number;
        categoryId: number;
        createdAt: Date;
        Description: string;
    })[]>;
    displayProductByID(id: number): Promise<{
        discount: {
            id: number;
            name: string;
            createdAt: Date;
            productId: number | null;
            description: string | null;
            discountType: import(".prisma/client").$Enums.discount_discountType;
            value: number;
            startDate: Date;
            endDate: Date;
        }[];
        brand: {
            id: number;
            name: string;
            createdAt: Date;
            imageUrl: string;
        };
        productimage: {
            imageUrl: string;
        }[];
        productVariants: {
            id: number;
            productId: number;
            color: string;
            price: number;
        }[];
    } & {
        id: number;
        name: string;
        brandId: number;
        categoryId: number;
        createdAt: Date;
        Description: string;
    }>;
}
