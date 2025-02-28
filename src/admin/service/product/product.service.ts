import { connect } from 'http2';
import { insertVariantDTO } from '../../dto/insertDTO/InsertVariant.dto';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { error, log } from 'console';
import { PrismaService } from 'src/prisma/prisma.service';
import { FileUploadService } from 'src/file-upload/file-upload.service';

@Injectable()
export class ProductService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly fileUploadService: FileUploadService,
  ) { }
  async insertProduct(insertProductDto, images) {
    try {
      const { price, name, brand, description, color, category, size } =
        insertProductDto;

      if (
        !price ||
        !name ||
        !brand ||
        !description ||
        !color ||
        !category ||
        !size
      ) {
        throw new Error('Must input all fields');
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

      // Create the product with variants and multiple images
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
                  imageUrl: img, // Map each image URL correctly
                })),
              },
            },
          },
        },
      });

      return newProduct; // Return the newly created product
    } catch (error) {
      throw new Error(`Something went wrong: ${error}`);
    }
  }

  // async updateProduct(updateProductDTO, images, oldname, oldColor) {
  //   try {
  //     const { name, brand, category, color, price, description, size } =
  //       updateProductDTO;

  //     if (
  //       !name ||
  //       !brand ||
  //       !category ||
  //       !color ||
  //       !price ||
  //       !description ||
  //       !size
  //     ) {
  //       throw new Error('input Atleast name');
  //     } else if (
  //       !brand ||
  //       !category ||
  //       !color ||
  //       !price ||
  //       !description ||
  //       !size
  //     ) {
  //       return this.prisma.product.update({
  //         where: {
  //           name: oldname,
  //         },
  //         data: {
  //           name,
  //         },
  //       });
  //     } else if (!brand || !category || !color || !price) {
  //       return this.prisma.product.update({
  //         where: {
  //           name: oldname,
  //         },
  //         data: {
  //           name,
  //           Description: description,
  //         },
  //       });
  //     }
  //     const brandID = await this.prisma.brand.findUnique({
  //       where: { name: brand },
  //     });
  //     const categoryID = await this.prisma.category.findUnique({
  //       where: { name: category },
  //     });

  //     if (!color || !price) {
  //       return this.prisma.product.update({
  //         where: {
  //           name: oldname,
  //         },
  //         data: {
  //           name,
  //           Description: description,
  //           category: {
  //             connect: { id: categoryID.id },
  //           },
  //           brand: {
  //             connect: { id: brandID.id },
  //           },
  //         },
  //       });
  //     } else {
  //       // Step 1: Update the product itself
  //       // Step 1: Update the product itself
  //       await this.prisma.product.update({
  //         where: {
  //           name: oldname, // Directly match the product by name
  //         },
  //         data: {
  //           name,
  //           Description: description,
  //           category: {
  //             connect: { id: categoryID.id },
  //           },
  //           brand: {
  //             connect: { id: brandID.id },
  //           },
  //         },
  //       });

  //       // Step 2: Update the related productVariants
  //       const product = await this.prisma.product.findUnique({
  //         where: {
  //           name: oldname, // Get the product by name to fetch its ID
  //         },
  //       });

  //       await this.prisma.productVariants.updateMany({
  //         where: {
  //           productId: product.id, // Use productId instead of product in the where clause
  //           color: oldColor, // Match the old color of the variant
  //         },
  //         data: {
  //           color, // New color
  //           price, // New price
  //           size,
  //         },
  //       });

  //       // Step 3: Optionally, include productVariants in the response if needed
  //       return await this.prisma.product.findUnique({
  //         where: {
  //           name: oldname, // Directly match the product by name
  //         },
  //         include: {
  //           productVariants: {
  //             where: {
  //               color: oldColor, // Check for the oldColor in the related productVariants
  //             },
  //           },
  //         },
  //       });
  //     }
  //   } catch (error) {
  //     throw new Error('something went wrong');
  //   }
  // }

  async insertBrand(insertBrandDTO, image: string) {
    const { brand_name } = insertBrandDTO;

    // Validate input
    if (!brand_name || !image) {
      throw new BadRequestException('Brand name and image are required');
    }

    try {
      // Insert into database
      const newBrand = await this.prisma.brand.create({
        data: {
          name: brand_name,
          imageUrl: image,
        },
      });

      return newBrand;
    } catch (error) {
      console.error('Database error:', error); // Log error for debugging
      throw new InternalServerErrorException('Could not create brand');
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
    } catch (error) {
      throw new Error(`something went wrong ${error}`);
    }
  }
  async uploadProductName() { }
}
