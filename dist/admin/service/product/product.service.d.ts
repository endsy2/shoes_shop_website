import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    insertProduct(insertProductDto: any, images: any): Promise<{
        id: number;
        name: string;
        brandId: number;
        categoryID: number;
        createdAt: Date;
        Description: string;
    }>;
    insertBrand(insertBrandDTO: any, image: any): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        imageUrl: string;
    }>;
    insertCategory(insertCategoryDTO: any): Promise<{
        id: number;
        name: string;
    }>;
    insertVariant(insertVariantDTO: any): Promise<{
        id: number;
        color: string;
        price: number;
        product_id: number;
    }>;
    uploadProductName(): Promise<void>;
}
