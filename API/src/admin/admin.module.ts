import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

import { PrismaService } from 'src/prisma/prisma.service';
import { ProductService } from './service/product/product.service';
import { OrderService } from './service/order/order.service';
import { DiscountService } from './service/discount/discount.service';
import { SharedService } from 'src/shared/shared.service';

@Module({
  imports: [],
  controllers: [AdminController],
  providers: [
    PrismaService,
    ProductService,
    OrderService,
    DiscountService,
    SharedService,
  ],
})
export class AdminModule {}
