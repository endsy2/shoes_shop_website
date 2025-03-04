import { PrismaService } from './../../../prisma/prisma.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) { }

  async displayOrder() {
    try {
      const orders = await this.prisma.order.findMany({
        include: {
          orderitem: {
            include: {
              productVariant: {
                include: {
                  product_fk: {
                    include: {
                      brand: true,
                      category: true,
                    },
                  },
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
              productVariant: {
                include: {
                  product_fk: {
                    include: {
                      brand: true, // Include brand details
                      productVariants: true,
                      category: true, // Include product variants
                    },
                  },
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
  async deleteOrder(id){
    try {
      const orderItems=await this.prisma.orderitem.deleteMany({
        where:{orderId:{in:id}}
      })
      const order=await this.prisma.order.deleteMany({
        where:id
      });
      return {message:'brand deleted'};
    } catch (error) {
      throw new Error(`something went wrong ${error}`);
    }
  }
  async deleteOrderItems(id){
    try {
      const brand=await this.prisma.orderitem.deleteMany({
        where:id
      });
      return {message:'brand deleted'};
    } catch (error) {
      throw new Error(`something went wrong ${error}`);
    }
  }
  async checkout(createOrderDTO){
    try{
      const amount =0;
      const {productVariant,quantity,price}=createOrderDTO.orderitem;
      // const order=await this.prisma.order.create({
      //   data:{
      //     orderitem:{
      //       create:{
      //         quantity:1,
      //         productVariantId:1
      //       }
      //     }
      //   }
      // });
      // return order;
      console.log(quantity);
      console.log(productVariant);
      console.log(price);
      
    }
    catch(error){
      throw new Error(`something went wrong ${error}`);
  }
}
}