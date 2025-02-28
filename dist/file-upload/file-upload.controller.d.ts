import { FileUploadService } from './file-upload.service.js';
export declare class FileUploadController {
    private readonly fileUploadService;
    constructor(fileUploadService: FileUploadService);
    uploadFile(file: Express.Multer.File): Promise<{
        message: string;
    }>;
}
