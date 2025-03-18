import { OrderService } from 'src/admin/service/order/order.service';
import { ProductService } from 'src/admin/service/product/product.service';
import { SharedService } from 'src/shared/shared.service';
export declare class DiscountController {
    private readonly sharedService;
    private readonly orderService;
    private readonly productService;
    constructor(sharedService: SharedService, orderService: OrderService, productService: ProductService);
}
