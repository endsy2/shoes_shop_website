import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  Request,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InsertProductDto } from './dto/InsertProduct.dto';
import { log } from 'console';
import { CommonService } from 'src/common/common.service';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly commonService: CommonService,
  ) { }
  // @Post('addProduct')
  // @UsePipes(ValidationPipe)
  // async insertProduct(@Request() req, @Body() body) {
  //   console.log(req.body);
  // }
  @Get('displayProduct')
  async displayProduct() {
    return this.commonService.displayProduct();
  }
  @Get('displayProduct/:id')
  async displayProductByID(@Param('id', ParseIntPipe) id: number) {
    return this.commonService.displayProductByID(id);
  }
  @Get('displayProduct?:name')
  async displayProductByName(@Query('name') name: string) {
    return this.commonService.displayProductByName(name);
  }
  @Get('displayOrder')
  async displayOrder() {
    return this.adminService.displayOrder();
  }
  @Get('displayOrder/:id')
  async displayOrderByID(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.displayOrderByID(id);
  }
  @Post('insertProduct')
  @UsePipes(ValidationPipe)
  InsertProduct(@Body() insertProductDto: InsertProductDto) {
    return this;
  }
}
