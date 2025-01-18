import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SharedService {
  constructor(private prisma: PrismaService) {}

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
  async displayProductByName(name: string) {
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
  }
  async getCategory() {
    return this.prisma.category.findMany();
  }
}
