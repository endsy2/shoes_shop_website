import { SharedService } from 'src/shared/shared.service';
import { UserService } from './user.service';
export declare class UserController {
    private readonly shareService;
    private readonly userService;
    constructor(shareService: SharedService, userService: UserService);
    displayAllProduct(): Promise<{
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
    displayProductByName(name: string): Promise<{
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
    displayProductByCategory(category: string): Promise<{
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
}
