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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountController = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("../../service/order/order.service");
const product_service_1 = require("../../service/product/product.service");
const shared_service_1 = require("../../../shared/shared.service");
let DiscountController = class DiscountController {
    constructor(sharedService, orderService, productService) {
        this.sharedService = sharedService;
        this.orderService = orderService;
        this.productService = productService;
    }
    async displayDiscount() {
        return this.sharedService.getDiscountedProducts();
    }
};
exports.DiscountController = DiscountController;
__decorate([
    (0, common_1.Get)('displayDiscount'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DiscountController.prototype, "displayDiscount", null);
exports.DiscountController = DiscountController = __decorate([
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [shared_service_1.SharedService,
        order_service_1.OrderService,
        product_service_1.ProductService])
], DiscountController);
//# sourceMappingURL=discount.controller.js.map