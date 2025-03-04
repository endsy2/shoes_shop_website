import { OrderService } from 'src/admin/service/order/order.service';
import { ProductService } from 'src/admin/service/product/product.service';
import { SharedService } from 'src/shared/shared.service';
export declare class DiscountController {
    private readonly sharedService;
    private readonly orderService;
    private readonly productService;
    constructor(sharedService: SharedService, orderService: OrderService, productService: ProductService);
    displayDiscount(): Promise<({
        product_fk: {
            id: number;
            name: string;
            brandId: number;
            categoryId: number;
            createdAt: Date;
            Description: string;
        };
        discount: {
            id: number;
            name: string;
            createdAt: Date;
            productVariantId: number | null;
            description: string | null;
            discountType: import(".prisma/client").$Enums.discount_discountType;
            value: number;
            startDate: Date;
            endDate: Date;
        }[];
    } & {
        id: number;
        productId: number;
        color: string;
        size: string;
        price: number;
    })[]>;
}
