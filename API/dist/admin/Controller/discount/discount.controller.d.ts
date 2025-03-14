import { OrderService } from 'src/admin/service/order/order.service';
import { ProductService } from 'src/admin/service/product/product.service';
import { SharedService } from 'src/shared/shared.service';
export declare class DiscountController {
    private readonly sharedService;
    private readonly orderService;
    private readonly productService;
    constructor(sharedService: SharedService, orderService: OrderService, productService: ProductService);
    displayDiscount(): Promise<({
        discount: {
            value: number;
            name: string;
            description: string | null;
            id: number;
            createdAt: Date;
            productVariantId: number | null;
            discountType: import(".prisma/client").$Enums.discount_discountType;
            startDate: Date;
            endDate: Date;
        }[];
        product_fk: {
            name: string;
            id: number;
            createdAt: Date;
            brandId: number;
            categoryId: number;
            Description: string;
        };
    } & {
        color: string;
        price: number;
        size: string;
        id: number;
        productId: number;
    })[]>;
}
