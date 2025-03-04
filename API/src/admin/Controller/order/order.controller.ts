import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { OrderService } from 'src/admin/service/order/order.service';
import { ProductService } from 'src/admin/service/product/product.service';
import { SharedService } from 'src/shared/shared.service';
import {  CreateOrderDTO } from './dto/CreateOrder.dto';

@Controller('admin')
export class OrderController {
    constructor(
        private readonly sharedService: SharedService,
        private readonly orderService: OrderService,
        private readonly productService: ProductService,
      ) { }
      
  @Get('displayOrder')
  async displayOrder() {
    return this.orderService.displayOrder();
  }
  @Get('displayOrder/:id')
  async displayOrderByID(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.displayOrderByID(id);
  }
  @Get('deleteOrder/:id')
  async deleteOrder(@Param('id',ParseIntPipe)id :number) {
    return this.orderService.deleteOrder(id);
  }
  @Get('deleteOrderItem/:id')
  async deleteOrderItem(@Param('id',ParseIntPipe)id :number) {
    return this.orderService.deleteOrderItems(id);
  }
  @Post('checkout')
  async checkout(@Body() createOrderDTO:CreateOrderDTO){
    try {
        return this.orderService.checkout(createOrderDTO)
    } catch (error) {
        throw new Error("something went wrong");
    }
  }
 
}

