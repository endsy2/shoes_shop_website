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
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InsertProductDto } from './dto/InsertProduct.dto';
import { log } from 'console';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) { }

  @Post('addProduct')
  @UsePipes(ValidationPipe)
  async insertProduct(@Request() req, @Body() body) {
    console.log(req.body);
  }
}
