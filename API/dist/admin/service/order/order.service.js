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
exports.OrderService = void 0;
const prisma_service_1 = require("./../../../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let OrderService = class OrderService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async displayOrder() {
        try {
            const orders = await this.prisma.order.findMany({
                include: {
                    orderitem: {
                        include: {
                            productVariant: {
                                include: {
                                    product_fk: {
                                        include: {
                                            brand: true,
                                            category: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            });
            return orders;
        }
        catch (error) {
            throw new Error(`Error fetching orders: ${error}`);
        }
    }
    async displayOrderByID(id) {
        try {
            const orders = await this.prisma.order.findUnique({
                include: {
                    orderitem: {
                        include: {
                            productVariant: {
                                include: {
                                    product_fk: {
                                        include: {
                                            brand: true,
                                            productVariants: true,
                                            category: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                where: { id },
            });
            if (!orders) {
                throw new common_1.HttpException('order not founded', common_1.HttpStatus.NOT_FOUND);
            }
            return orders;
        }
        catch (error) {
            throw new Error(`Error fetching orders: ${error}`);
        }
    }
    async deleteOrder(id) {
        try {
            const orderItems = await this.prisma.orderitem.deleteMany({
                where: { orderId: { in: id } }
            });
            const order = await this.prisma.order.deleteMany({
                where: id
            });
            return { message: 'brand deleted' };
        }
        catch (error) {
            throw new Error(`something went wrong ${error}`);
        }
    }
    async deleteOrderItems(id) {
        try {
            const brand = await this.prisma.orderitem.deleteMany({
                where: id
            });
            return { message: 'brand deleted' };
        }
        catch (error) {
            throw new Error(`something went wrong ${error}`);
        }
    }
    async checkout(createOrderDTO) {
        try {
            const amount = 0;
            const { productVariant, quantity, price } = createOrderDTO.orderitem;
            console.log(quantity);
            console.log(productVariant);
            console.log(price);
        }
        catch (error) {
            throw new Error(`something went wrong ${error}`);
        }
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrderService);
//# sourceMappingURL=order.service.js.map