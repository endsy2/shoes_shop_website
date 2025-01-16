import { connect } from 'http2';
import { insertVariantDTO } from '../../dto/insertDTO/InsertVariant.dto';
import { Injectable } from '@nestjs/common';
import { error } from 'console';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
    constructor(private readonly prisma: PrismaService) { }
    async insertProduct(insertProductDto, images) {
        try {
            const { price, name, brand, description, color, category } =
                insertProductDto;

            if (!price || !name || !brand || !description || !color || !category) {
                throw new Error('Must input all flied');
            }
            // Find the brand by name
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

            // Create the product with associated images and variants
            const newProduct = await this.prisma.product.create({
                data: {
                    name,
                    Description: description,
                    brand: {
                        connect: { id: brandID.id }, // Use brandID.id to connect correctly
                    },
                    category: {
                        connect: { id: categoryID.id }, // Corrected category connection
                    },
                    productimage: {
                        create: images.map((image) => ({
                            imageUrl: image, // Ensure the correct mapping for image URLs
                        })),
                    },
                    productVariants: {
                        create: {
                            color,
                            price,
                        },
                    },
                },
            });

            return newProduct; // Return the newly created product
        } catch (error) {
            throw new Error(`Something went wrong: ${error}`);
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
        } catch (error) {
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
        } catch (error) {
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
        } catch (error) {
            throw new Error(`something went wrong ${error}`);
        }
    }
    async uploadProductName() { }
}
