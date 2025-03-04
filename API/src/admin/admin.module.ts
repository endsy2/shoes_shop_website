import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';

import { PrismaService } from 'src/prisma/prisma.service';
import { ProductService } from './service/product/product.service';
import { OrderService } from './service/order/order.service';
import { DiscountService } from './service/discount/discount.service';
import { SharedService } from 'src/shared/shared.service';
import { ProductController } from './Controller/product/product.controller';
import { OrderController } from './Controller/order/order.controller';
import { DiscountController } from './Controller/discount/discount.controller';

@Module({
  imports: [],
  controllers: [ProductController, OrderController, DiscountController],
  providers: [
    PrismaService,
    ProductService,
    OrderService,
    DiscountService,
    SharedService,
  ],
})
export class AdminModule {}
