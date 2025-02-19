import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { log } from 'console';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SharedService {
  constructor(private prisma: PrismaService) { }

  async displayProduct() {
    return this.prisma.product.findMany({
      include: {
        brand: true,
        discount: true,
        productVariants: true,
        productimage: {
          select: {
            imageUrl: true,
          },
        },
      },
    });
  }
  async displayProductByID(id: number) {
    const product = await this.prisma.product.findUnique({
      include: {
        brand: true, // Include the brand
        discount: true, // Include the discounts
        productVariants: true,
        productimage: {
          select: {
            imageUrl: true, // Only include imageUrl from productimages
          },
        },
      },
      where: { id },
    });
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    return product;
  }
  async displayProductByName({ name }) {
    try {
      if (!name) {
        throw new Error('something went wrong');
      }
      const product = await this.prisma.product.findMany({
        include: {
          brand: true,
          discount: true,
          productVariants: true,
          productimage: {
            select: {
              imageUrl: true,
            },
          },
        },
        where: { name },
      });
      if (!product) {
        throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
      }
      return product; // Return the result.
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

      const products = await this.prisma.product.findMany({
        where: {
          categoryId: category.id,
        },
        include: {
          brand: true,
          productimage: true,
          productVariants: true,
          discount: true,
        },
      });

      return products;
    } catch (error) {
      console.error('Error fetching products by category:', error);
      throw error;
    }
  }
  async getSortPrice({ min, max }) {
    try {
      const products = await this.prisma.product.findMany({
        include: {
          discount: true,
          productVariants: true,
        },
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}
