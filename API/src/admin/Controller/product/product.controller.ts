import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { InsertbrandDTO } from 'src/admin/dto/insertDTO/InsertBrand.dio';
import { InsertCategoryDTO } from 'src/admin/dto/insertDTO/insertCategory.dto';
import { InsertProductDto } from 'src/admin/dto/insertDTO/InsertProduct.dto';
import { insertVariantDTO } from 'src/admin/dto/insertDTO/InsertVariant.dto';
import { UpdateProductVariantDTO } from 'src/admin/dto/insertDTO/UpdateDTO/UpdateProductVariant.dto';
import { OrderService } from 'src/admin/service/order/order.service';
import { ProductService } from 'src/admin/service/product/product.service';
import { multerConfig } from 'src/Config/multerConfig';
import { SharedService } from 'src/shared/shared.service';

@Controller('admin')
export class ProductController {
  constructor(
    private readonly sharedService: SharedService,
    private readonly orderService: OrderService,
    private readonly productService: ProductService,
  ) { }
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
  @Get('displayCategory')
  async displayCategory() {
    return this.orderService.displayOrder();
  }

  @Post('InsertProduct')
  @UseInterceptors(FilesInterceptor('files', 10, multerConfig))
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
      const images = [];
      for (const image of files) {
        images.push(image.filename);
      }
      // console.log(typeof insertProductDto.price);
      return this.productService.insertProduct(insertProductDto, images);
    } catch (error) {
      throw new BadRequestException(error || 'file upload not success');
    }
  }

  @Put('updateProductVariant')
  @UseInterceptors(FileInterceptor('file', multerConfig))
  @UsePipes(ValidationPipe)
  async UpdateProduct(
    @UploadedFile() file: Express.Multer.File,
    @Body() updateProductDTO: UpdateProductVariantDTO,
    @Query() oldName: string,
    oldColor: string,
  ) {
    if (!file) {
      throw new Error('you must input a image');
    }
    return this.productService.updateProduct(
      updateProductDTO,
      file,
      oldName,
      oldColor,
    );
  }

  @Post('InsertBrand')
  @UseInterceptors(FileInterceptor('file', multerConfig))
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
  // @Get('displayProductDiscount')
  // async displayProductDiscount() {
  //   return this.sharedService.getDiscountedProducts();
  // }
  // @Delete('deleteProduct/:id')
  // async deleteProduct(@Param('id', ParseIntPipe) id: number) {
  //   return this.productService.deleteProduct(id);
  // }
  @Delete('deleteCategory/:id')
  async deleteCategory(@Param('id', ParseIntPipe) id: number) {
    return this.productService.deleteCategory(id);
  }
  @Delete('deleteBrand/:id')
  async deleteBrand(@Param('id', ParseIntPipe) id: number) {
    return this.productService.deleteBrand(id);
  }
}
