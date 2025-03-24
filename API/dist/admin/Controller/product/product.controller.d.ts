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
                discountType: import(".prisma/client").$Enums.discount_discountType;
                startDate: Date;
                endDate: Date;
            };
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
            discountId: number | null;
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
                discountType: import(".prisma/client").$Enums.discount_discountType;
                startDate: Date;
                endDate: Date;
            };
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
            discountId: number | null;
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
                discountType: import(".prisma/client").$Enums.discount_discountType;
                startDate: Date;
                endDate: Date;
            };
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
            discountId: number | null;
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
    displayCategory(): Promise<({
        orderitem: ({
            productVariant: {
                product_fk: {
                    brand: {
                        name: string;
                        id: number;
                        imageUrl: string;
                        createdAt: Date;
                    };
                    category: {
                        name: string;
                        id: number;
                    };
                } & {
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
                discountId: number | null;
                productId: number;
            };
        } & {
            id: number;
            createdAt: Date;
            productVariantId: number;
            quantity: number;
            orderId: number;
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
        name: string;
        id: number;
        createdAt: Date;
        brandId: number;
        categoryId: number;
        Description: string;
    }>;
    UpdateProduct(file: Express.Multer.File, updateProductDTO: UpdateProductVariantDTO, oldName: string, oldColor: string): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        brandId: number;
        categoryId: number;
        Description: string;
    }>;
    InsertBrand(file: Express.Multer.File, insertbrandDTO: InsertbrandDTO): Promise<{
        name: string;
        id: number;
        imageUrl: string;
        createdAt: Date;
    }>;
    InsertCategory(insertCategoryDTO: InsertCategoryDTO): Promise<{
        name: string;
        id: number;
    }>;
    InsertVariant(insertVariantDIO: insertVariantDTO): Promise<{
        color: string;
        price: number;
        size: string;
        id: number;
        discountId: number | null;
        productId: number;
    }>;
    deleteCategory(id: number): Promise<{
        message: string;
    }>;
    deleteBrand(id: number): Promise<{
        message: string;
    }>;
}
