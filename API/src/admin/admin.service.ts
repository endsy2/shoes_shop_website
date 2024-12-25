import {
  Body,
  HttpException,
  HttpStatus,
  Injectable,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InsertProductDto } from './dto/InsertProduct.dto';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) { }
  //order section
  async displayOrder() {
    try {
      const orders = await this.prisma.order.findMany({
        include: {
          orderitem: {
            include: {
              product: {
                include: {
                  brand: true, // Include brand details
                  productVariants: true, // Include product variants
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
                  productVariants: true, // Include product variants
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
  //product
  async insertProduct(insertProductDto) {
    try {
    } catch (error) {
      throw new Error(`something went wrong ${error}`);
    }
  }
}
