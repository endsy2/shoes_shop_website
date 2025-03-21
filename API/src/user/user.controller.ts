import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { SharedService } from 'src/shared/shared.service';
import { UserService } from './user.service';
import { log } from 'console';
import { CreateOrderDTO } from './dto/CreateOrder.dto';
import { Checkout } from './dto/Ckeckout.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly shareService: SharedService,
    private readonly userService: UserService,
  ) { }
  @Get('displayProductAll')
  async displayAllProduct() {
    return this.shareService.displayProduct();
  }

  @Get('displayProduct/byname')
  async displayProductByName(@Query('name') name: string) {
    return this.shareService.displayProductByName({ name });
  }
  @Get('displayProduct/bycategory')
  async displayProductByCategory(@Query('category') category: string) {
    return this.shareService.getProductByCategory({ categoryName: category });
    // console.log(category);
  }

  // @Get('displayProduct/sort')
  // async displayProductBySortPrice(
  //   @Query('max', ParseIntPipe) max: number,
  //   @Query('min', ParseIntPipe) min: number,
  // ) {
  //   console.log(`Max: ${max}, Min: ${min}`);
  //   return this.shareService.getSortPrice({ max, min });
  // }

  @Get('displayProductByID/:id')
  async displayProductByID(@Param('id', ParseIntPipe) id: number) {
    return this.shareService.displayProductByID(id);
  }
  @Get('displayProductDiscount')
  async displayProductDiscount() {
    return this.shareService.getDiscountedProducts();
  }
  @Post('checkout')
  async checkout(@Body() createOrderDTO: CreateOrderDTO) {
    try {
      return this.userService.checkout(createOrderDTO);
    } catch (error) {
      throw new Error('something went wrong');
    }
  }
  @Get('displayDiscount')
  async displayDiscount() {
    return this.shareService.getDiscountedProducts();
  }
  @Get('displayBrand')
  async displayBrand() {
    return this.shareService.displayBrand();
  }
}
