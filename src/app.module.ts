import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { FileUploadModule } from './file-upload/file-upload.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    AdminModule,
    UserModule,
    SharedModule,
    FileUploadModule, // Import Multer config from FileUploadModule
    PrismaModule,
  ],
})
export class AppModule { }
