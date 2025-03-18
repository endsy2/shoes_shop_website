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
let ProductService = class ProductService {
    constructor(prisma) {
        this.prisma = prisma;
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
                throw new Error('Must input all flied');
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
                    Description: description,
                    brand: {
                        connect: { id: brandID.id },
                    },
                    category: {
                        connect: { id: categoryID.id },
                    },
                    productVariants: {
                        create: {
                            color,
                            price,
                            size,
                            productimage: {
                                create: images.map((image) => ({
                                    imageUrl: image,
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
    async updateProduct(updateProductDTO, images, oldname, oldColor) {
        try {
            const { name, brand, category, color, price, description, size } = updateProductDTO;
            if (!name ||
                !brand ||
                !category ||
                !color ||
                !price ||
                !description ||
                !size) {
                throw new Error('input Atleast name');
            }
            else if (!brand ||
                !category ||
                !color ||
                !price ||
                !description ||
                !size) {
                return this.prisma.product.update({
                    where: {
                        name: oldname,
                    },
                    data: {
                        name,
                    },
                });
            }
            else if (!brand || !category || !color || !price) {
                return this.prisma.product.update({
                    where: {
                        name: oldname,
                    },
                    data: {
                        name,
                        Description: description,
                    },
                });
            }
            const brandID = await this.prisma.brand.findUnique({
                where: { name: brand },
            });
            const categoryID = await this.prisma.category.findUnique({
                where: { name: category },
            });
            if (!color || !price) {
                return this.prisma.product.update({
                    where: {
                        name: oldname,
                    },
                    data: {
                        name,
                        Description: description,
                        category: {
                            connect: { id: categoryID.id },
                        },
                        brand: {
                            connect: { id: brandID.id },
                        },
                    },
                });
            }
            else {
                await this.prisma.product.update({
                    where: {
                        name: oldname,
                    },
                    data: {
                        name,
                        Description: description,
                        category: {
                            connect: { id: categoryID.id },
                        },
                        brand: {
                            connect: { id: brandID.id },
                        },
                    },
                });
                const product = await this.prisma.product.findUnique({
                    where: {
                        name: oldname,
                    },
                });
                await this.prisma.productVariants.updateMany({
                    where: {
                        productId: product.id,
                        color: oldColor,
                    },
                    data: {
                        color,
                        price,
                        size,
                    },
                });
                return await this.prisma.product.findUnique({
                    where: {
                        name: oldname,
                    },
                    include: {
                        productVariants: {
                            where: {
                                color: oldColor,
                            },
                        },
                    },
                });
            }
        }
        catch (error) {
            throw new Error('something went wrong');
        }
    }
    async insertBrand(insertBrandDTO, image) {
        const { brand_name } = insertBrandDTO;
        if (!brand_name) {
            throw new Error('input the brand name');
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
            throw new Error(`something went wrong ${error}`);
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
    async insertVariant(insertVariantDTO) {
        const { productName, price, color } = insertVariantDTO;
        if (!productName || !price || !color) {
            throw new Error('Input all flied');
        }
        try {
            const product = await this.prisma.product.findUnique({
                where: { name: productName },
            });
            if (!product) {
                throw new Error('Product Not Found');
            }
            const newVariant = await this.prisma.productVariants.create({
                data: {
                    product_fk: {
                        connect: { id: product.id },
                    },
                    color,
                    price,
                },
            });
            return newVariant;
        }
        catch (error) {
            throw new Error(`something went wrong ${error}`);
        }
    }
    async deleteCategory(id) {
        try {
            const category = await this.prisma.category.delete({
                where: id,
            });
            return { message: 'category deleted' };
        }
        catch (error) {
            throw new Error(`something went wrong ${error}`);
        }
    }
    async deleteBrand(id) {
        try {
            const brand = await this.prisma.category.deleteMany({
                where: id,
            });
            return { message: 'brand deleted' };
        }
        catch (error) {
            throw new Error(`something went wrong ${error}`);
        }
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
//# sourceMappingURL=product.service.js.map