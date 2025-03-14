import { SharedService } from 'src/shared/shared.service';
import { UserService } from './user.service';
import { CreateOrderDTO } from './dto/CreateOrder.dto';
export declare class UserController {
    private readonly shareService;
    private readonly userService;
    constructor(shareService: SharedService, userService: UserService);
    displayAllProduct(): Promise<({
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
    displayProductByName(name: string): Promise<({
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
    displayProductByCategory(category: string): Promise<({
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
    displayProductBySortPrice(max: number, min: number): Promise<{
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
    displayProductDiscount(): Promise<({
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
    checkout(createOrderDTO: CreateOrderDTO): Promise<{
        message: string;
    }>;
    displayDiscount(): Promise<({
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
}
