import { OrderService } from './service/order/order.service';
import { InsertProductDto } from './dto/insertDTO/InsertProduct.dto';
import { SharedService } from 'src/shared/shared.service';
import { ProductService } from './service/product/product.service';
import { InsertbrandDTO } from './dto/insertDTO/InsertBrand.dio';
import { InsertCategoryDTO } from './dto/insertDTO/insertCategory.dto';
import { insertVariantDTO } from './dto/insertDTO/InsertVariant.dto';
import { UpdateProductVariantDTO } from './dto/insertDTO/UpdateDTO/UpdateProductVariant.dto';
export declare class AdminController {
    private readonly sharedService;
    private readonly orderService;
    private readonly productService;
    constructor(sharedService: SharedService, orderService: OrderService, productService: ProductService);
    displayProduct(): Promise<({
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
                productVariantId: number | null;
                description: string | null;
                discountType: import(".prisma/client").$Enums.discount_discountType;
                value: number;
                startDate: Date;
                endDate: Date;
            }[];
        } & {
            id: number;
            productId: number;
            color: string;
            size: string;
            price: number;
        })[];
    } & {
        id: number;
        name: string;
        brandId: number;
        categoryId: number;
        createdAt: Date;
        Description: string;
    })[]>;
    displayProductByID(id: number): Promise<void>;
    displayProductByName(name: string): Promise<void>;
    displayOrder(): Promise<({
        orderitem: ({
            productVariant: {
                product_fk: {
                    brand: {
                        id: number;
                        name: string;
                        createdAt: Date;
                        imageUrl: string;
                    };
                    category: {
                        id: number;
                        name: string;
                    };
                } & {
                    id: number;
                    name: string;
                    brandId: number;
                    categoryId: number;
                    createdAt: Date;
                    Description: string;
                };
            } & {
                id: number;
                productId: number;
                color: string;
                size: string;
                price: number;
            };
        } & {
            id: number;
            createdAt: Date;
            productVariantId: number;
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
            productVariant: {
                product_fk: {
                    brand: {
                        id: number;
                        name: string;
                        createdAt: Date;
                        imageUrl: string;
                    };
                    productVariants: {
                        id: number;
                        productId: number;
                        color: string;
                        size: string;
                        price: number;
                    }[];
                    category: {
                        id: number;
                        name: string;
                    };
                } & {
                    id: number;
                    name: string;
                    brandId: number;
                    categoryId: number;
                    createdAt: Date;
                    Description: string;
                };
            } & {
                id: number;
                productId: number;
                color: string;
                size: string;
                price: number;
            };
        } & {
            id: number;
            createdAt: Date;
            productVariantId: number;
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
            productVariant: {
                product_fk: {
                    brand: {
                        id: number;
                        name: string;
                        createdAt: Date;
                        imageUrl: string;
                    };
                    category: {
                        id: number;
                        name: string;
                    };
                } & {
                    id: number;
                    name: string;
                    brandId: number;
                    categoryId: number;
                    createdAt: Date;
                    Description: string;
                };
            } & {
                id: number;
                productId: number;
                color: string;
                size: string;
                price: number;
            };
        } & {
            id: number;
            createdAt: Date;
            productVariantId: number;
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
        categoryId: number;
        createdAt: Date;
        Description: string;
    }>;
    UpdateProduct(file: Express.Multer.File, updateProductDTO: UpdateProductVariantDTO, oldName: string, oldColor: string): Promise<{
        id: number;
        name: string;
        brandId: number;
        categoryId: number;
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
        productId: number;
        color: string;
        size: string;
        price: number;
    }>;
}
