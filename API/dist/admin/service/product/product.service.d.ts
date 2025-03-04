import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    insertProduct(insertProductDto: any, images: any): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        brandId: number;
        categoryId: number;
        Description: string;
    }>;
    updateProduct(updateProductDTO: any, images: any, oldname: any, oldColor: any): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        brandId: number;
        categoryId: number;
        Description: string;
    }>;
    insertBrand(insertBrandDTO: any, image: any): Promise<{
        name: string;
        id: number;
        imageUrl: string;
        createdAt: Date;
    }>;
    insertCategory(insertCategoryDTO: any): Promise<{
        name: string;
        id: number;
    }>;
    insertVariant(insertVariantDTO: any): Promise<{
        color: string;
        price: number;
        size: string;
        id: number;
        productId: number;
    }>;
    uploadProductName(): Promise<void>;
    deleteProduct(id: number): Promise<{
        message: string;
    }>;
    deleteCategory(id: any): Promise<{
        message: string;
    }>;
    deleteBrand(id: any): Promise<{
        message: string;
    }>;
}
