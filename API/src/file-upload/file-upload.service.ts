import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class FileUploadService {
  private readonly allowedMimeTypes = [
    'image/jpeg',
    'image/png',
    'application/pdf',
  ];
  private readonly maxSize = 5 * 1024 * 1024; // 5MB

  handleFileUpload(file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    if (!this.allowedMimeTypes.includes(file.mimetype)) {
      throw new BadRequestException(
        `Invalid file type. Allowed types: ${this.allowedMimeTypes.join(', ')}`,
      );
    }

    if (file.size > this.maxSize) {
      throw new BadRequestException(
        `File is too large. Max size is ${this.maxSize / (1024 * 1024)}MB`,
      );
    }

    // Assuming disk storage
    const baseUrl = 'http://localhost:3000'; // Replace with your actual domain
    const fileUrl = `${baseUrl}/uploads/${file.filename}`;

    return {
      message: 'File uploaded successfully',
      fileUrl,
      fileName: file.originalname,
      mimeType: file.mimetype,
      size: file.size,
    };
  }
}
