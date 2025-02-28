import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FileUploadService } from './file-upload.service.js';
import { FileUploadController } from './file-upload.controller.js';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads', // Save files in "uploads" folder
        filename: (req, file, cb) => {
          const filename = `${Date.now()}-${file.originalname}`;
          cb(null, filename);
        },
      }),
    }),
  ],
  controllers: [FileUploadController],
  providers: [FileUploadService],
  exports: [MulterModule], // Export so other modules can use it
})
export class FileUploadModule { }
