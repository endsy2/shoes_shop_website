"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadService = void 0;
const common_1 = require("@nestjs/common");
let FileUploadService = class FileUploadService {
    constructor() {
        this.allowedMimeTypes = [
            'image/jpeg',
            'image/png',
            'application/pdf',
        ];
        this.maxSize = 5 * 1024 * 1024;
    }
    handleFileUpload(file) {
        if (!file) {
            throw new common_1.BadRequestException('No file uploaded');
        }
        if (!this.allowedMimeTypes.includes(file.mimetype)) {
            throw new common_1.BadRequestException(`Invalid file type. Allowed types: ${this.allowedMimeTypes.join(', ')}`);
        }
        if (file.size > this.maxSize) {
            throw new common_1.BadRequestException(`File is too large. Max size is ${this.maxSize / (1024 * 1024)}MB`);
        }
        const baseUrl = 'http://localhost:3000';
        const fileUrl = `${baseUrl}/uploads/${file.filename}`;
        return {
            message: 'File uploaded successfully',
            fileUrl,
            fileName: file.originalname,
            mimeType: file.mimetype,
            size: file.size,
        };
    }
};
exports.FileUploadService = FileUploadService;
exports.FileUploadService = FileUploadService = __decorate([
    (0, common_1.Injectable)()
], FileUploadService);
//# sourceMappingURL=file-upload.service.js.map