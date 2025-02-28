import { Discount } from './../../node_modules/.prisma/client/index.d';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SharedService {
  constructor(private prisma: PrismaService) { }

  async displayProduct() {
    return this.prisma.product.findMany({
      select: {
        id: true,
        name: true,
        brand: { select: { name: true } },
        category: { select: { name: true } },
        productVariants: {
          select: {
            id: true,
            color: true,
            size: true,
            price: true,
            discounts: { select: { name: true, value: true } },
            productImages: { select: { imageUrl: true } },
          },
        },
      },
    });
  }

  async displayProductByID(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        brand: { select: { name: true } },
        category: { select: { name: true } },
        productVariants: {
          select: {
            id: true,
            color: true,
            size: true,
            price: true,
            discounts: { select: { name: true, value: true } },
            productImages: { select: { imageUrl: true } },
          },
        },
      },
    });

    return product;
  }

  async displayProductByName({ name }) {
    try {
      const product = await this.prisma.product.findUnique({
        where: { name },
        select: {
          id: true,
          name: true,
          brand: { select: { name: true } },
          category: { select: { name: true } },
          productVariants: {
            select: {
              id: true,
              color: true,
              size: true,
              price: true,
              discounts: { select: { name: true, value: true } },
              productImages: { select: { imageUrl: true } },
            },
          },
        },
      });

      return product;
    } catch (error) {
      throw new Error('something went wrong');
    }
  }
  async getCategory() {
    return this.prisma.category.findMany();
  }
  async getProductByCategory({ categoryName }) {
    try {
      const category = await this.prisma.category.findUnique({
        where: {
          name: categoryName,
        },
        select: {
          id: true,
        },
      });

      if (!category) {
        throw new Error('Category not found');
      }

      const product = await this.prisma.product.findMany({
        where: { category },
        select: {
          id: true,
          name: true,
          brand: { select: { name: true } },
          category: { select: { name: true } },
          productVariants: {
            select: {
              id: true,
              color: true,
              size: true,
              price: true,
              discounts: { select: { name: true, value: true } },
              productImages: { select: { imageUrl: true } },
            },
          },
        },
      });

      return product;
    } catch (error) {
      console.error('Error fetching products by category:', error);
      throw error;
    }
  }
  // async getSortPrice({ min, max }) {
  //   try {
  //     const products = await this.prisma.product.findMany({
  //       include: {
  //         productVariants: {
  //           include: {
  //             discount: true,
  //           },
  //         },
  //       },
  //       where: {
  //         OR: [
  //           {
  //             productVariants: {
  //               some: {
  //                 discount: {
  //                   some: {
  //                     value: {
  //                       gte: min,
  //                       lte: max,
  //                     },
  //                   },
  //                 },
  //               },
  //             },
  //           },
  //           {
  //             productVariants: {
  //               some: {
  //                 price: {
  //                   gte: min,
  //                   lte: max,
  //                 },
  //               },
  //             },
  //           },
  //         ],
  //       },
  //     });

  //     // Process the products to determine the actual price
  //     return products.map((product) => {
  //       let price = null;

  //       // Find the lowest price from product variants
  //       const variantPrices = product.productVariants.map((variant) => {
  //         // Check if variant has a discount
  //         if (variant.discount.length > 0) {
  //           return variant.discount[0].value; // Use discount value
  //         }
  //         return variant.price; // Otherwise, use regular price
  //       });

  //       // Get the minimum price among variants
  //       if (variantPrices.length > 0) {
  //         price = Math.min(...variantPrices);
  //       }

  //       return {
  //         ...product,
  //         finalPrice: price,
  //       };
  //     });
  //   } catch (error) {
  //     console.error('Error fetching sorted products:', error);
  //     throw error;
  //   }
  // }

  // async getDiscount() {
  //   return this.prisma.discount.findMany({
  //     include: {
  //       product: {
  //         include: {
  //           category: true,
  //           brand: true,
  //         },
  //       },
  //     },
  //   });
  // }
  async displayBrand() {
    return this.prisma.brand.findMany();
  }
}
