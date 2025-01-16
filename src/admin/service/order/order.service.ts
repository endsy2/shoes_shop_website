import { PrismaService } from './../../../prisma/prisma.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async displayOrder() {
    try {
      const orders = await this.prisma.order.findMany({
        include: {
          orderitem: {
            include: {
              product: {
                include: {
                  brand: true, // Include brand details
                  productVariants: true,
                  category: true,
                },
              },
            },
          },
        },
      });
      return orders;
    } catch (error) {
      throw new Error(`Error fetching orders: ${error}`);
    }
  }
  async displayOrderByID(id) {
    try {
      const orders = await this.prisma.order.findUnique({
        include: {
          orderitem: {
            include: {
              product: {
                include: {
                  brand: true, // Include brand details
                  productVariants: true,
                  category: true, // Include product variants
                },
              },
            },
          },
        },
        where: { id },
      });
      if (!orders) {
        throw new HttpException('order not founded', HttpStatus.NOT_FOUND);
      }
      return orders;
    } catch (error) {
      throw new Error(`Error fetching orders: ${error}`);
    }
  }
}
