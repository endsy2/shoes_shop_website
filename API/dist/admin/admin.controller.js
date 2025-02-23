"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const order_service_1 = require("./service/order/order.service");
const file_upload_service_1 = require("./../file-upload/file-upload.service");
const common_1 = require("@nestjs/common");
const InsertProduct_dto_1 = require("./dto/insertDTO/InsertProduct.dto");
const shared_service_1 = require("../shared/shared.service");
const platform_express_1 = require("@nestjs/platform-express");
const admin_service_1 = require("./admin.service");
const product_service_1 = require("./service/product/product.service");
const InsertBrand_dio_1 = require("./dto/insertDTO/InsertBrand.dio");
const insertCategory_dto_1 = require("./dto/insertDTO/insertCategory.dto");
const InsertVariant_dto_1 = require("./dto/insertDTO/InsertVariant.dto");
const UpdateProductVariant_dto_1 = require("./dto/insertDTO/UpdateDTO/UpdateProductVariant.dto");
let AdminController = class AdminController {
    constructor(adminService, sharedService, fileUploadService, orderService, productService) {
        this.adminService = adminService;
        this.sharedService = sharedService;
        this.fileUploadService = fileUploadService;
        this.orderService = orderService;
        this.productService = productService;
    }
    async displayProduct() {
        return this.sharedService.displayProduct();
    }
    async displayProductByID(id) {
        return this.sharedService.displayProductByID(id);
    }
    async displayProductByName(name) {
        return this.sharedService.displayProductByName({ name });
    }
    async displayOrder() {
        return this.orderService.displayOrder();
    }
    async displayOrderByID(id) {
        return this.orderService.displayOrderByID(id);
    }
    async displayCategory() {
        return this.orderService.displayOrder();
    }
    async InsertProduct(files, insertProductDto) {
        if (!files || files.length === 0) {
            throw new common_1.BadRequestException('At least one file is required');
        }
        console.log(insertProductDto);
        try {
            const uploadResult = await Promise.all(files.map((file) => this.fileUploadService.handleFileUpload(file)));
            const images = [];
            for (const image of uploadResult) {
                images.push(image.fileName);
            }
            return this.productService.insertProduct(insertProductDto, images);
        }
        catch (error) {
            throw new common_1.BadRequestException(error || 'file upload not success');
        }
    }
    async UpdateProduct(file, updateProductDTO, oldName, oldColor) {
        if (!file) {
            throw new Error('you must input a image');
        }
        return this.productService.updateProduct(updateProductDTO, file, oldName, oldColor);
    }
    async InsertBrand(file, insertbrandDTO) {
        if (!file) {
            throw new Error('you must input a image');
        }
        return this.productService.insertBrand(insertbrandDTO, file.filename);
    }
    async InsertCategory(insertCategoryDTO) {
        return this.productService.insertCategory(insertCategoryDTO);
    }
    async InsertVariant(insertVariantDIO) {
        return this.productService.insertVariant(insertVariantDIO);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Get)('displayProduct'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "displayProduct", null);
__decorate([
    (0, common_1.Get)('displayProduct/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "displayProductByID", null);
__decorate([
    (0, common_1.Get)('displayProduct?:name'),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "displayProductByName", null);
__decorate([
    (0, common_1.Get)('displayOrder'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "displayOrder", null);
__decorate([
    (0, common_1.Get)('displayOrder/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "displayOrderByID", null);
__decorate([
    (0, common_1.Get)('displayCategory'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "displayCategory", null);
__decorate([
    (0, common_1.Post)('InsertProduct'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', 10)),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array,
        InsertProduct_dto_1.InsertProductDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "InsertProduct", null);
__decorate([
    (0, common_1.Put)('updateProductVariant'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateProductVariant_dto_1.UpdateProductVariantDTO, String, String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "UpdateProduct", null);
__decorate([
    (0, common_1.Post)('InsertBrand'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, InsertBrand_dio_1.InsertbrandDTO]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "InsertBrand", null);
__decorate([
    (0, common_1.Post)('InsertCategory'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [insertCategory_dto_1.InsertCategoryDTO]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "InsertCategory", null);
__decorate([
    (0, common_1.Post)('InsertVariant'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InsertVariant_dto_1.insertVariantDTO]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "InsertVariant", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService,
        shared_service_1.SharedService,
        file_upload_service_1.FileUploadService,
        order_service_1.OrderService,
        product_service_1.ProductService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map