import { PassportJwtGuard } from './guards/auth/passport-jwt.guard';
import { AuthService } from './auth.service';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotImplementedException,
  Post,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from './guards/auth/auth.guard';
import { SignUpDto } from './DTO/signUp.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @UsePipes(ValidationPipe)
  @UseGuards(PassportJwtGuard)
  @Post('login')
  login(@Request() request) {
    return this.authService.signIn(request.user);
  }
  @HttpCode(HttpStatus.OK)
  @Post('signUp')
  signUp(@Body() input: SignUpDto) {
    return this.authService.signUp(input);
  }

  @UseGuards(PassportJwtGuard)
  @Get('me')
  getUserInto(@Request() request) {
    // throw new NotImplementedException();
    return request.user;
  }
}
