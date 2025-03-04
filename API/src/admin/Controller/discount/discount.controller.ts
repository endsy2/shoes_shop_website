import { Controller, Get } from '@nestjs/common';
import { OrderService } from 'src/admin/service/order/order.service';
import { ProductService } from 'src/admin/service/product/product.service';
import { SharedService } from 'src/shared/shared.service';

@Controller('admin')
export class DiscountController {
constructor(
    private readonly sharedService: SharedService,
    private readonly orderService: OrderService,
    private readonly productService: ProductService,
  ) { }
  @Get('displayDiscount')
    async displayDiscount() {
        return this.sharedService.getDiscountedProducts();
    }

}
