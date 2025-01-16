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
            color: string;
            price: number;
            product_id: number;
        }[];
    } & {
        id: number;
        name: string;
        brandId: number;
        categoryID: number;
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
            color: string;
            price: number;
            product_id: number;
        }[];
    } & {
        id: number;
        name: string;
        brandId: number;
        categoryID: number;
        createdAt: Date;
        Description: string;
    }>;
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
            color: string;
            price: number;
            product_id: number;
        }[];
    } & {
        id: number;
        name: string;
        brandId: number;
        categoryID: number;
        createdAt: Date;
        Description: string;
    })[]>;
    displayOrder(): Promise<({
        orderitem: ({
            product: {
                brand: {
                    id: number;
                    name: string;
                    createdAt: Date;
                    imageUrl: string;
                };
                productVariants: {
                    id: number;
                    color: string;
                    price: number;
                    product_id: number;
                }[];
                category: {
                    id: number;
                    name: string;
                };
            } & {
                id: number;
                name: string;
                brandId: number;
                categoryID: number;
                createdAt: Date;
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
        createdAt: Date;
        totalAmount: number;
        status: import(".prisma/client").$Enums.order_status;
        customerId: number;
    })[]>;
    displayOrderByID(id: number): Promise<{
        orderitem: ({
            product: {
                brand: {
                    id: number;
                    name: string;
                    createdAt: Date;
                    imageUrl: string;
                };
                productVariants: {
                    id: number;
                    color: string;
                    price: number;
                    product_id: number;
                }[];
                category: {
                    id: number;
                    name: string;
                };
            } & {
                id: number;
                name: string;
                brandId: number;
                categoryID: number;
                createdAt: Date;
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
        createdAt: Date;
        totalAmount: number;
        status: import(".prisma/client").$Enums.order_status;
        customerId: number;
    }>;
    displayCategory(): Promise<({
        orderitem: ({
            product: {
                brand: {
                    id: number;
                    name: string;
                    createdAt: Date;
                    imageUrl: string;
                };
                productVariants: {
                    id: number;
                    color: string;
                    price: number;
                    product_id: number;
                }[];
                category: {
                    id: number;
                    name: string;
                };
            } & {
                id: number;
                name: string;
                brandId: number;
                categoryID: number;
                createdAt: Date;
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
        createdAt: Date;
        totalAmount: number;
        status: import(".prisma/client").$Enums.order_status;
        customerId: number;
    })[]>;
    InsertProduct(files: Array<Express.Multer.File>, insertProductDto: InsertProductDto): Promise<{
        id: number;
        name: string;
        brandId: number;
        categoryID: number;
        createdAt: Date;
        Description: string;
    }>;
    InsertBrand(file: Express.Multer.File, insertbrandDTO: InsertbrandDTO): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        imageUrl: string;
    }>;
    InsertCategory(insertCategoryDTO: InsertCategoryDTO): Promise<{
        id: number;
        name: string;
    }>;
    InsertVariant(insertVariantDIO: insertVariantDTO): Promise<{
        id: number;
        color: string;
        price: number;
        product_id: number;
    }>;
    UpdateProductName(: any): any;
}
