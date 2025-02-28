"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const file_upload_service_1 = require("../../../file-upload/file-upload.service");
let ProductService = class ProductService {
    constructor(prisma, fileUploadService) {
        this.prisma = prisma;
        this.fileUploadService = fileUploadService;
    }
    async insertProduct(insertProductDto, images) {
        try {
            const { price, name, brand, description, color, category, size } = insertProductDto;
            if (!price ||
                !name ||
                !brand ||
                !description ||
                !color ||
                !category ||
                !size) {
                throw new Error('Must input all fields');
            }
            const brandID = await this.prisma.brand.findUnique({
                where: { name: brand },
            });
            const categoryID = await this.prisma.category.findUnique({
                where: { name: category },
            });
            if (!brandID) {
                throw new Error('This brand does not exist');
            }
            if (!categoryID) {
                throw new Error('This category does not exist');
            }
            const newProduct = await this.prisma.product.create({
                data: {
                    name,
                    description,
                    brand: { connect: { id: brandID.id } },
                    category: { connect: { id: categoryID.id } },
                    productVariants: {
                        create: {
                            color,
                            price,
                            size,
                            productImages: {
                                create: images.map((img) => ({
                                    imageUrl: img,
                                })),
                            },
                        },
                    },
                },
            });
            return newProduct;
        }
        catch (error) {
            throw new Error(`Something went wrong: ${error}`);
        }
    }
    async insertBrand(insertBrandDTO, image) {
        const { brand_name } = insertBrandDTO;
        if (!brand_name || !image) {
            throw new common_1.BadRequestException('Brand name and image are required');
        }
        try {
            const newBrand = await this.prisma.brand.create({
                data: {
                    name: brand_name,
                    imageUrl: image,
                },
            });
            return newBrand;
        }
        catch (error) {
            console.error('Database error:', error);
            throw new common_1.InternalServerErrorException('Could not create brand');
        }
    }
    async insertCategory(insertCategoryDTO) {
        const { category_name } = insertCategoryDTO;
        if (!category_name) {
            throw new Error('input category');
        }
        try {
            const newCategory = this.prisma.category.create({
                data: {
                    name: category_name,
                },
            });
            return newCategory;
        }
        catch (error) {
            throw new Error(`something went wrong ${error}`);
        }
    }
    async insertVariant(insertVariantDTO, images) {
        const { productName, price, color, size } = insertVariantDTO;
        if (!productName || !price || !color || !size) {
            throw new Error('Input all flied');
        }
        try {
            const product = await this.prisma.product.findUnique({
                where: { name: productName },
            });
            if (!product) {
                throw new Error('Product Not Found');
            }
            const newVariant = await this.prisma.productVariant.create({
                data: {
                    productId: product.id,
                    color,
                    size,
                    price,
                    productImages: {
                        create: images.map((img) => ({
                            imageUrl: img,
                        })),
                    },
                },
            });
            return newVariant;
        }
        catch (error) {
            throw new Error(`something went wrong ${error}`);
        }
    }
    async uploadProductName() { }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        file_upload_service_1.FileUploadService])
], ProductService);
//# sourceMappingURL=product.service.js.map