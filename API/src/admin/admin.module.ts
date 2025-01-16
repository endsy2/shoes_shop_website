import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

// import { CommonService } from 'src/common/common.service';
import { FileUploadModule } from 'src/file-upload/file-upload.module';
import { FileUploadService } from 'src/file-upload/file-upload.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductService } from './service/product/product.service';
import { OrderService } from './service/order/order.service';
import { DiscountService } from './service/discount/discount.service';
import { SharedService } from 'src/shared/shared.service';

@Module({
  imports: [],
  controllers: [AdminController],
  providers: [
    AdminService,
    FileUploadService,
    PrismaService,
    ProductService,
    OrderService,
    DiscountService,
    SharedService,
  ],
})
export class AdminModule {}
