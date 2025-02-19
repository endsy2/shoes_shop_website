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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const shared_service_1 = require("../shared/shared.service");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(shareService, userService) {
        this.shareService = shareService;
        this.userService = userService;
    }
    async displayAllProduct() {
        return this.shareService.displayProduct();
    }
    async displayProductByName(name) {
        return this.shareService.displayProductByName({ name });
    }
    async displayProductByCategory(category) {
        return this.shareService.getProductByCategory({ categoryName: category });
    }
    async displayProductBySortPrice(max, min) {
        console.log(`Max: ${max}, Min: ${min}`);
        return this.shareService.getSortPrice({ max, min });
    }
    async displayProductByID(id) {
        return this.shareService.displayProductByID(id);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)('displayProductAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "displayAllProduct", null);
__decorate([
    (0, common_1.Get)('displayProductBy/name'),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "displayProductByName", null);
__decorate([
    (0, common_1.Get)('displayProduct/category'),
    __param(0, (0, common_1.Query)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "displayProductByCategory", null);
__decorate([
    (0, common_1.Get)('displayProduct/sort'),
    __param(0, (0, common_1.Query)('max', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('min', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "displayProductBySortPrice", null);
__decorate([
    (0, common_1.Get)('displayProductByID/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "displayProductByID", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [shared_service_1.SharedService,
        user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map