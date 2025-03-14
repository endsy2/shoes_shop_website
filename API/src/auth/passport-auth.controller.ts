import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth/auth.guard';
import { PassportLocalGuard } from './guards/auth/passport-local.guard';
import { PassportJwtGuard } from './guards/auth/passport-jwt.guard';

@Controller('auth-v2')
export class PassportAuthController {
    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @UseGuards(PassportLocalGuard)
    @Post('login')
    login(@Request() request) {
        return this.authService.signIn(request.user);
    }

    @Get('me')
    @UseGuards(PassportJwtGuard)
    getUserInto(@Request() request) {
        // throw new NotImplementedException();
        return request.user;
    }
}
