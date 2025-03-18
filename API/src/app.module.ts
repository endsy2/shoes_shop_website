import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { SharedModule } from './shared/shared.module';
import { MulterModule } from '@nestjs/platform-express';
import multer from 'multer';
import { DiscountController } from './admin/Controller/discount/discount.controller';
import { OrderController } from './admin/Controller/order/order.controller';
import { ProductController } from './admin/Controller/product/product.controller';
import { AuthModule } from './auth/auth.module';
// import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AdminModule,
    UserModule,
    SharedModule,
    MulterModule.register({
      storage: multer.diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          cb(null, `${file.originalname}-${Date.now()}`);
        },
      }),
    }),

    PrismaModule,
    AuthModule,
  ],
})
export class AppModule { }
