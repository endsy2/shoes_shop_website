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
    displayProductByName(name: string): Promise<{
        id: number;
        name: string;
        brand: {
            name: string;
        };
        category: {
            name: string;
        };
        productVariants: {
            id: number;
            color: string;
            size: string;
            price: number;
            discounts: {
                name: string;
                value: number;
            }[];
            productImages: {
                imageUrl: string;
            }[];
        }[];
    }>;
    displayProduct(): Promise<{
        id: number;
        name: string;
        brand: {
            name: string;
        };
        category: {
            name: string;
        };
        productVariants: {
            id: number;
            color: string;
            size: string;
            price: number;
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
        id: number;
        name: string;
        brand: {
            name: string;
        };
        category: {
            name: string;
        };
        productVariants: {
            id: number;
            color: string;
            size: string;
            price: number;
            discounts: {
                name: string;
                value: number;
            }[];
            productImages: {
                imageUrl: string;
            }[];
        }[];
    }>;
    InsertProduct(files: Array<Express.Multer.File>, insertProductDto: InsertProductDto): Promise<{
        id: number;
        name: string;
        brandId: number;
        categoryId: number;
        description: string;
        createdAt: Date;
    }>;
    InsertBrand(file: Express.Multer.File, insertbrandDTO: InsertbrandDTO): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        imageUrl: string;
    }>;
    displayBrand(): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        imageUrl: string;
    }[]>;
    uploadFile(file: Express.Multer.File): Promise<{
        message: string;
    }>;
    InsertCategory(insertCategoryDTO: InsertCategoryDTO): Promise<{
        id: number;
        name: string;
    }>;
    InsertVariant(files: Array<Express.Multer.File>, insertVariantDIO: insertVariantDTO): Promise<{
        id: number;
        color: string;
        size: string;
        price: number;
        productId: number;
    }>;
}
