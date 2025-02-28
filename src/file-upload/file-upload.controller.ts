import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploadService } from './file-upload.service.js';

@Controller('file-upload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) { }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    // Validate the file
    if (!file) {
      throw new BadRequestException('File is required');
    }

    try {
      console.log(file);

      // console.log(file);

      // Pass the file to the service for handling
      // const uploadResult = await this.fileUploadService.handleFileUpload(file);
      return {
        message: 'File uploaded successfully',
      };
    } catch (error) {
      // Handle errors and return a meaningful response
      throw new BadRequestException(error || 'File upload failed');
    }
  }
}
