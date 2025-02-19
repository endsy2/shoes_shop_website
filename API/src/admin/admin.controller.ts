import { OrderService } from './service/order/order.service';
import { FileUploadService } from './../file-upload/file-upload.service';
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
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  UploadedFiles,
  Put,
} from '@nestjs/common';

import { InsertProductDto } from './dto/insertDTO/InsertProduct.dto';
import { SharedService } from 'src/shared/shared.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { AdminService } from './admin.service';
import { ProductService } from './service/product/product.service';
import { log } from 'console';
import { InsertbrandDTO } from './dto/insertDTO/InsertBrand.dio';
import { InsertCategoryDTO } from './dto/insertDTO/insertCategory.dto';
import { insertVariantDTO } from './dto/insertDTO/InsertVariant.dto';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly sharedService: SharedService,
    private readonly fileUploadService: FileUploadService,
    private readonly orderService: OrderService,
    private readonly productService: ProductService,
  ) {}
  @Get('displayProduct')
  async displayProduct() {
    return this.sharedService.displayProduct();
  }
  @Get('displayProduct/:id')
  async displayProductByID(@Param('id', ParseIntPipe) id: number) {
    return this.sharedService.displayProductByID(id);
  }
  @Get('displayProduct?:name')
  async displayProductByName(@Query('name') name: string) {
    return this.sharedService.displayProductByName({ name });
  }
  @Get('displayOrder')
  async displayOrder() {
    return this.orderService.displayOrder();
  }
  @Get('displayOrder/:id')
  async displayOrderByID(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.displayOrderByID(id);
  }
  @Get('displayCategory')
  async displayCategory() {
    return this.orderService.displayOrder();
  }

  @Post('InsertProduct')
  @UseInterceptors(FilesInterceptor('files', 10))
  @UsePipes(ValidationPipe)
  async InsertProduct(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() insertProductDto: InsertProductDto,
  ) {
    if (!files || files.length === 0) {
      throw new BadRequestException('At least one file is required');
    }
    console.log(insertProductDto);

    try {
      const uploadResult = await Promise.all(
        files.map((file) => this.fileUploadService.handleFileUpload(file)),
      );
      const images = [];
      for (const image of uploadResult) {
        images.push(image.fileName);
      }
      // console.log(typeof insertProductDto.price);
      return this.productService.insertProduct(insertProductDto, images);
    } catch (error) {
      throw new BadRequestException(error || 'file upload not success');
    }
  }
  @Post('InsertBrand')
  @UseInterceptors(FileInterceptor('file'))
  @UsePipes(ValidationPipe)
  async InsertBrand(
    @UploadedFile() file: Express.Multer.File,
    @Body() insertbrandDTO: InsertbrandDTO,
  ) {
    if (!file) {
      throw new Error('you must input a image');
    }
    return this.productService.insertBrand(insertbrandDTO, file.filename);
  }
  @Post('InsertCategory')
  @UsePipes(ValidationPipe)
  async InsertCategory(@Body() insertCategoryDTO: InsertCategoryDTO) {
    return this.productService.insertCategory(insertCategoryDTO);
  }
  @Post('InsertVariant')
  @UsePipes(ValidationPipe)
  async InsertVariant(@Body() insertVariantDIO: insertVariantDTO) {
    return this.productService.insertVariant(insertVariantDIO);
  }
  // @Put('UpdateProductName')
  // @UsePipes(ValidationPipe)
  // async UpdateProductName(@Body() )
}
