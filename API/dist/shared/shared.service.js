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
exports.SharedService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SharedService = class SharedService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async displayProduct() {
        return this.prisma.product.findMany({
            include: {
                brand: true,
                productVariants: {
                    include: {
                        discount: true,
                        productimage: true,
                    },
                },
            },
        });
    }
    async displayProductByID(id) {
        const product = await this.prisma.product.findUnique({
            include: {
                brand: true,
                productVariants: {
                    include: {
                        discount: true,
                        productimage: true,
                    },
                },
            },
            where: { id },
        });
        if (!product) {
            throw new common_1.HttpException('Product not found', common_1.HttpStatus.NOT_FOUND);
        }
        return product;
    }
    async displayProductByName({ name }) {
        try {
            if (!name) {
                throw new Error('something went wrong');
            }
            const product = await this.prisma.product.findMany({
                include: {
                    brand: true,
                    productVariants: {
                        include: {
                            discount: true,
                            productimage: true,
                        },
                    },
                },
                where: { name },
            });
            if (!product) {
                throw new common_1.HttpException('Product not found', common_1.HttpStatus.NOT_FOUND);
            }
            return product;
        }
        catch (error) {
            throw new Error('something went wrong');
        }
    }
    async getCategory() {
        return this.prisma.category.findMany();
    }
    async getProductByCategory({ categoryName }) {
        try {
            const category = await this.prisma.category.findUnique({
                where: {
                    name: categoryName,
                },
                select: {
                    id: true,
                },
            });
            if (!category) {
                throw new Error('Category not found');
            }
            const products = await this.prisma.product.findMany({
                where: {
                    categoryId: category.id,
                },
                include: {
                    brand: true,
                    productVariants: {
                        include: {
                            discount: true,
                            productimage: true,
                        },
                    },
                },
            });
            return products;
        }
        catch (error) {
            console.error('Error fetching products by category:', error);
            throw error;
        }
    }
    async getSortPrice({ min, max }) {
        try {
            const products = await this.prisma.product.findMany({
                include: {
                    productVariants: {
                        include: {
                            discount: true,
                        },
                    },
                },
                where: {
                    OR: [
                        {
                            productVariants: {
                                some: {
                                    discount: {
                                        some: {
                                            value: {
                                                gte: min,
                                                lte: max,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        {
                            productVariants: {
                                some: {
                                    price: {
                                        gte: min,
                                        lte: max,
                                    },
                                },
                            },
                        },
                    ],
                },
            });
            return products.map((product) => {
                let price = null;
                const variantPrices = product.productVariants.map((variant) => {
                    if (variant.discount.length > 0) {
                        return variant.discount[0].value;
                    }
                    return variant.price;
                });
                if (variantPrices.length > 0) {
                    price = Math.min(...variantPrices);
                }
                return {
                    ...product,
                    finalPrice: price,
                };
            });
        }
        catch (error) {
            console.error('Error fetching sorted products:', error);
            throw error;
        }
    }
    async getDiscountedProducts() {
        try {
            const productsWithDiscounts = await this.prisma.productVariants.findMany({
                where: {
                    discount: {
                        some: {
                            startDate: { lte: new Date() },
                            endDate: { gte: new Date() },
                        },
                    },
                },
                include: {
                    product_fk: true,
                    discount: true,
                },
            });
            return productsWithDiscounts;
        }
        catch (error) {
            console.error('Error fetching discounted products:', error);
        }
        finally {
            await this.prisma.$disconnect();
        }
    }
    async getOrderByCustomerName(firstName, lastName) {
        try {
            if (!firstName || !lastName) {
                throw new Error('First name and last name are required.');
            }
            const customer_row = await this.prisma.customer.findFirst({
                where: { firstName, lastName },
            });
            if (!customer_row) {
                throw new Error('Customer not found');
            }
            const orders = await this.prisma.order.findMany({
                where: { customerId: customer_row.id },
                include: {
                    orderitem: {
                        include: {
                            productVariant: {
                                include: { product_fk: true },
                            },
                        },
                    },
                },
            });
            return orders;
        }
        catch (error) {
            console.error('Error fetching orders:', error);
            throw new Error(`Something went wrong: ${error}`);
        }
    }
};
exports.SharedService = SharedService;
exports.SharedService = SharedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SharedService);
//# sourceMappingURL=shared.service.js.map