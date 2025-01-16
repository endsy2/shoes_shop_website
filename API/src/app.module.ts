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
    // MulterModule.register({
    //   storage: multer.diskStorage({
    //     destination: './uploads',
    //     filename: (req, file, cb) => {
    //       cb(null, `${file.originalname}-${Date.now()}`);
    //     },
    //   }),
    // }),
    // FileUploadModule,
    FileUploadModule,
    PrismaModule,
  ],
})
export class AppModule {}
