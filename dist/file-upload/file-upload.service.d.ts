export declare class FileUploadService {
    private readonly allowedMimeTypes;
    private readonly maxSize;
    handleFileUpload(file: Express.Multer.File): {
        message: string;
        fileUrl: string;
        fileName: string;
        mimeType: string;
        size: number;
    };
}
