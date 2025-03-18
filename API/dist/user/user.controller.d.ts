import { SharedService } from 'src/shared/shared.service';
import { UserService } from './user.service';
import { CreateOrderDTO } from './dto/CreateOrder.dto';
export declare class UserController {
    private readonly shareService;
    private readonly userService;
    constructor(shareService: SharedService, userService: UserService);
    displayAllProduct(): Promise<({
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
    displayProductByName(name: string): Promise<({
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
    displayProductByCategory(category: string): Promise<({
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
    checkout(createOrderDTO: CreateOrderDTO): Promise<{
        message: string;
    }>;
    displayBrand(): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        imageUrl: string;
    }[]>;
}
