"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const admin_controller_1 = require("./admin.controller");
const file_upload_service_1 = require("../file-upload/file-upload.service");
const prisma_service_1 = require("../prisma/prisma.service");
const product_service_1 = require("./service/product/product.service");
const order_service_1 = require("./service/order/order.service");
const discount_service_1 = require("./service/discount/discount.service");
const shared_service_1 = require("../shared/shared.service");
let AdminModule = class AdminModule {
};
exports.AdminModule = AdminModule;
exports.AdminModule = AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [admin_controller_1.AdminController],
        providers: [
            admin_service_1.AdminService,
            file_upload_service_1.FileUploadService,
            prisma_service_1.PrismaService,
            product_service_1.ProductService,
            order_service_1.OrderService,
            discount_service_1.DiscountService,
            shared_service_1.SharedService,
        ],
    })
], AdminModule);
//# sourceMappingURL=admin.module.js.map