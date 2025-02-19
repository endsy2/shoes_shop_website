import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    insertProduct(insertProductDto: any, images: any): Promise<{
        id: number;
        createdAt: Date;
        name: string;
        brandId: number;
        categoryId: number;
        Description: string;
    }>;
    insertBrand(insertBrandDTO: any, image: any): Promise<{
        id: number;
        createdAt: Date;
        name: string;
        imageUrl: string;
    }>;
    insertCategory(insertCategoryDTO: any): Promise<{
        id: number;
        name: string;
    }>;
    insertVariant(insertVariantDTO: any): Promise<{
        id: number;
        price: number;
        color: string;
        productId: number;
    }>;
    uploadProductName(): Promise<void>;
}
