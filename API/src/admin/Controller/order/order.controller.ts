import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { OrderService } from 'src/admin/service/order/order.service';
import { ProductService } from 'src/admin/service/product/product.service';
import { SharedService } from 'src/shared/shared.service';

@Controller('admin')
export class OrderController {
  constructor(
    private readonly sharedService: SharedService,
    private readonly orderService: OrderService,
    private readonly productService: ProductService,
  ) {}

  @Get('displayOrder')
  async displayOrder() {
    return this.orderService.displayOrder();
  }
  @Get('displayOrder/:id')
  async displayOrderByID(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.displayOrderByID(id);
  }
  @Get('deleteOrder/:id')
  async deleteOrder(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.deleteOrder(id);
  }
  @Get('deleteOrderItem/:id')
  async deleteOrderItem(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.deleteOrderItems(id);
  }
  @Get('displayOrderByName?firstName:=firstName&LastName:=lastName')
  async displayOrderByName(@Query() firstName: string, LastName: string) {
    console.log(firstName, LastName);

    // return this.sharedService.getOrderByCustomerName(firstName,LastName);
  }
}
