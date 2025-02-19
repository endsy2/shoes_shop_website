import { OrderService } from './service/order/order.service';
import { FileUploadService } from './../file-upload/file-upload.service';
import { InsertProductDto } from './dto/insertDTO/InsertProduct.dto';
import { SharedService } from 'src/shared/shared.service';
import { AdminService } from './admin.service';
import { ProductService } from './service/product/product.service';
import { InsertbrandDTO } from './dto/insertDTO/InsertBrand.dio';
import { InsertCategoryDTO } from './dto/insertDTO/insertCategory.dto';
import { insertVariantDTO } from './dto/insertDTO/InsertVariant.dto';
export declare class AdminController {
    private readonly adminService;
    private readonly sharedService;
    private readonly fileUploadService;
    private readonly orderService;
    private readonly productService;
    constructor(adminService: AdminService, sharedService: SharedService, fileUploadService: FileUploadService, orderService: OrderService, productService: ProductService);
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
    displayProductByName(name: string): Promise<({
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
    displayOrder(): Promise<({
        orderitem: ({
            product: {
                brand: {
                    id: number;
                    createdAt: Date;
                    name: string;
                    imageUrl: string;
                };
                category: {
                    id: number;
                    name: string;
                };
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
            };
        } & {
            id: number;
            createdAt: Date;
            productId: number;
            orderId: number;
            quantity: number;
            amount: number;
        })[];
    } & {
        id: number;
        totalAmount: number;
        status: import(".prisma/client").$Enums.order_status;
        customerId: number;
        createdAt: Date;
    })[]>;
    displayOrderByID(id: number): Promise<{
        orderitem: ({
            product: {
                brand: {
                    id: number;
                    createdAt: Date;
                    name: string;
                    imageUrl: string;
                };
                category: {
                    id: number;
                    name: string;
                };
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
            };
        } & {
            id: number;
            createdAt: Date;
            productId: number;
            orderId: number;
            quantity: number;
            amount: number;
        })[];
    } & {
        id: number;
        totalAmount: number;
        status: import(".prisma/client").$Enums.order_status;
        customerId: number;
        createdAt: Date;
    }>;
    displayCategory(): Promise<({
        orderitem: ({
            product: {
                brand: {
                    id: number;
                    createdAt: Date;
                    name: string;
                    imageUrl: string;
                };
                category: {
                    id: number;
                    name: string;
                };
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
            };
        } & {
            id: number;
            createdAt: Date;
            productId: number;
            orderId: number;
            quantity: number;
            amount: number;
        })[];
    } & {
        id: number;
        totalAmount: number;
        status: import(".prisma/client").$Enums.order_status;
        customerId: number;
        createdAt: Date;
    })[]>;
    InsertProduct(files: Array<Express.Multer.File>, insertProductDto: InsertProductDto): Promise<{
        id: number;
        createdAt: Date;
        name: string;
        brandId: number;
        categoryId: number;
        Description: string;
    }>;
    InsertBrand(file: Express.Multer.File, insertbrandDTO: InsertbrandDTO): Promise<{
        id: number;
        createdAt: Date;
        name: string;
        imageUrl: string;
    }>;
    InsertCategory(insertCategoryDTO: InsertCategoryDTO): Promise<{
        id: number;
        name: string;
    }>;
    InsertVariant(insertVariantDIO: insertVariantDTO): Promise<{
        id: number;
        price: number;
        color: string;
        productId: number;
    }>;
}
