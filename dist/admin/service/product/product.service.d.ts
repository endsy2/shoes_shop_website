import { PrismaService } from 'src/prisma/prisma.service';
import { FileUploadService } from 'src/file-upload/file-upload.service';
export declare class ProductService {
    private readonly prisma;
    private readonly fileUploadService;
    constructor(prisma: PrismaService, fileUploadService: FileUploadService);
    insertProduct(insertProductDto: any, images: any): Promise<{
        id: number;
        name: string;
        brandId: number;
        categoryId: number;
        description: string;
        createdAt: Date;
    }>;
    insertBrand(insertBrandDTO: any, image: string): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        imageUrl: string;
    }>;
    insertCategory(insertCategoryDTO: any): Promise<{
        id: number;
        name: string;
    }>;
    insertVariant(insertVariantDTO: any, images: any): Promise<{
        id: number;
        color: string;
        size: string;
        price: number;
        productId: number;
    }>;
    uploadProductName(): Promise<void>;
}
