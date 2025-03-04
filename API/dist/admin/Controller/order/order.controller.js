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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("../../service/order/order.service");
const product_service_1 = require("../../service/product/product.service");
const shared_service_1 = require("../../../shared/shared.service");
const CreateOrder_dto_1 = require("./dto/CreateOrder.dto");
let OrderController = class OrderController {
    constructor(sharedService, orderService, productService) {
        this.sharedService = sharedService;
        this.orderService = orderService;
        this.productService = productService;
    }
    async displayOrder() {
        return this.orderService.displayOrder();
    }
    async displayOrderByID(id) {
        return this.orderService.displayOrderByID(id);
    }
    async deleteOrder(id) {
        return this.orderService.deleteOrder(id);
    }
    async deleteOrderItem(id) {
        return this.orderService.deleteOrderItems(id);
    }
    async checkout(createOrderDTO) {
        try {
            return this.orderService.checkout(createOrderDTO);
        }
        catch (error) {
            throw new Error("something went wrong");
        }
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, common_1.Get)('displayOrder'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "displayOrder", null);
__decorate([
    (0, common_1.Get)('displayOrder/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "displayOrderByID", null);
__decorate([
    (0, common_1.Get)('deleteOrder/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "deleteOrder", null);
__decorate([
    (0, common_1.Get)('deleteOrderItem/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "deleteOrderItem", null);
__decorate([
    (0, common_1.Post)('checkout'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateOrder_dto_1.CreateOrderDTO]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "checkout", null);
exports.OrderController = OrderController = __decorate([
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [shared_service_1.SharedService,
        order_service_1.OrderService,
        product_service_1.ProductService])
], OrderController);
//# sourceMappingURL=order.controller.js.map