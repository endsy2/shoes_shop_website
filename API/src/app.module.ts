import { Module } from '@nestjs/common';

import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { MulterModule } from '@nestjs/platform-express';
import { CommonModule } from './common/common.module';
import { PrismaService } from 'src/prisma/prisma.service'; // Add PrismaService here if needed

import multer from 'multer';
import { AdminController } from './admin/admin.controller';
import { CommonController } from './common/common.controller';
import { PrismaModule } from './prisma/prisma.module';
import { AdminService } from './admin/admin.service';
import { CommonService } from './common/common.service';

@Module({
  imports: [
    AdminModule,
    UserModule,
    CommonModule,
    MulterModule.register({
      storage: multer.diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          cb(null, `${file.originalname}-${Date.now()}`);
        },
      }),
    }),
  ],
})
export class AppModule {}
