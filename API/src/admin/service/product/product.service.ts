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
      const { price, name, brand, description, color, category,size } =
        insertProductDto;

      if (!price || !name || !brand || !description || !color || !category||!size) {
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
          productVariants: {
            create: {
              color,
              price,
              size,
              productimage:{
                create:images.map((image)=>(
                  {
                    imageUrl:image
                  }
                ))
              }
            },
          },
        },
      });

      return newProduct; // Return the newly created product
    } catch (error) {
      throw new Error(`Something went wrong: ${error}`);
    }
  }

  async updateProduct(updateProductDTO, images, oldname, oldColor) {
    try {
      const { name, brand, category, color, price, description, size } =
        updateProductDTO;

      if (
        !name ||
        !brand ||
        !category ||
        !color ||
        !price ||
        !description ||
        !size
      ) {
        throw new Error('input Atleast name');
      } else if (
        !brand ||
        !category ||
        !color ||
        !price ||
        !description ||
        !size
      ) {
        return this.prisma.product.update({
          where: {
            name: oldname,
          },
          data: {
            name,
          },
        });
      } else if (!brand || !category || !color || !price) {
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
      } else {
        // Step 1: Update the product itself
        // Step 1: Update the product itself
        await this.prisma.product.update({
          where: {
            name: oldname, // Directly match the product by name
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

        // Step 2: Update the related productVariants
        const product = await this.prisma.product.findUnique({
          where: {
            name: oldname, // Get the product by name to fetch its ID
          },
        });

        await this.prisma.productVariants.updateMany({
          where: {
            productId: product.id, // Use productId instead of product in the where clause
            color: oldColor, // Match the old color of the variant
          },
          data: {
            color, // New color
            price, // New price
            size,
          },
        });

        // Step 3: Optionally, include productVariants in the response if needed
        return await this.prisma.product.findUnique({
          where: {
            name: oldname, // Directly match the product by name
          },
          include: {
            productVariants: {
              where: {
                color: oldColor, // Check for the oldColor in the related productVariants
              },
            },
          },
        });
      }
    } catch (error) {
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
