import { InsertbrandDTO } from 'src/admin/dto/insertDTO/InsertBrand.dio';
import { InsertCategoryDTO } from 'src/admin/dto/insertDTO/insertCategory.dto';
import { InsertProductDto } from 'src/admin/dto/insertDTO/InsertProduct.dto';
import { insertVariantDTO } from 'src/admin/dto/insertDTO/InsertVariant.dto';
import { UpdateProductVariantDTO } from 'src/admin/dto/insertDTO/UpdateDTO/UpdateProductVariant.dto';
import { OrderService } from 'src/admin/service/order/order.service';
import { ProductService } from 'src/admin/service/product/product.service';
import { SharedService } from 'src/shared/shared.service';
export declare class ProductController {
    private readonly sharedService;
    private readonly orderService;
    private readonly productService;
    constructor(sharedService: SharedService, orderService: OrderService, productService: ProductService);
    displayProduct(): Promise<({
        productVariants: ({
            productimage: {
                id: number;
                createdAt: Date;
                productVariantId: number;
                imageUrl: string;
            }[];
            discount: {
                id: number;
                createdAt: Date;
                name: string;
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
        brand: {
            id: number;
            createdAt: Date;
            name: string;
            imageUrl: string;
        };
    } & {
        id: number;
        createdAt: Date;
        name: string;
        brandId: number;
        categoryId: number;
        Description: string;
    })[]>;
    displayProductByID(id: number): Promise<{
        productVariants: ({
            productimage: {
                id: number;
                createdAt: Date;
                productVariantId: number;
                imageUrl: string;
            }[];
            discount: {
                id: number;
                createdAt: Date;
                name: string;
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
        brand: {
            id: number;
            createdAt: Date;
            name: string;
            imageUrl: string;
        };
    } & {
        id: number;
        createdAt: Date;
        name: string;
        brandId: number;
        categoryId: number;
        Description: string;
    }>;
    displayProductByName(name: string): Promise<({
        productVariants: ({
            productimage: {
                id: number;
                createdAt: Date;
                productVariantId: number;
                imageUrl: string;
            }[];
            discount: {
                id: number;
                createdAt: Date;
                name: string;
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
        brand: {
            id: number;
            createdAt: Date;
            name: string;
            imageUrl: string;
        };
    } & {
        id: number;
        createdAt: Date;
        name: string;
        brandId: number;
        categoryId: number;
        Description: string;
    })[]>;
    displayCategory(): Promise<({
        orderitem: ({
            productVariant: {
                product_fk: {
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
                productId: number;
                color: string;
                size: string;
                price: number;
            };
        } & {
            id: number;
            createdAt: Date;
            orderId: number;
            productVariantId: number;
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
    UpdateProduct(file: Express.Multer.File, updateProductDTO: UpdateProductVariantDTO, oldName: string, oldColor: string): Promise<{
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
        productId: number;
        color: string;
        size: string;
        price: number;
    }>;
    displayProductDiscount(): Promise<({
        product_fk: {
            id: number;
            createdAt: Date;
            name: string;
            brandId: number;
            categoryId: number;
            Description: string;
        };
        discount: {
            id: number;
            createdAt: Date;
            name: string;
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
    })[]>;
    deleteProduct(id: number): Promise<{
        message: string;
    }>;
    deleteCategory(id: number): Promise<{
        message: string;
    }>;
    deleteBrand(id: number): Promise<{
        message: string;
    }>;
}
