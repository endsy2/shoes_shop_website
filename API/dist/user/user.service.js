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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const users = [
    {
        userId: 1,
        username: 'test1',
        password: '123',
    },
    {
        userId: 2,
        username: 'test2',
        password: '123',
    },
];
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async checkout(createOrderDTO) {
        try {
            const totalAmount = createOrderDTO.orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
            console.log(`Total Amount: ${totalAmount}`);
            const insertOrder = await this.prisma.order.create({
                data: {
                    customerId: createOrderDTO.customerId,
                    totalAmount: totalAmount,
                },
            });
            await this.prisma.orderitem.createMany({
                data: createOrderDTO.orderItems.map((item) => ({
                    orderId: insertOrder.id,
                    productVariantId: item.productVariantId,
                    quantity: item.quantity,
                    amount: item.price * item.quantity,
                })),
            });
            return { message: 'Order placed successfully' };
        }
        catch (error) {
            console.error('Checkout Error:', error);
            throw new Error(`Something went wrong: ${error}`);
        }
    }
    async findUserByName(username) {
        return users.find((user) => user.username === username);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map