import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

type AuthInput = { username: string; password: string };
type SignInData = { userId: number; username: string };
type SignUpData = {
  email: string;
  password: string;
  address: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};
type AuthResult = { accessToken: string };

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private prismaService: PrismaService,
  ) { }

  async authenticate(input: AuthInput): Promise<AuthResult> {
    const user = await this.validateUser(input);
    if (!user) {
      throw new UnauthorizedException();
    }
    return this.signIn(user);
  }

  async validateUser(input: AuthInput): Promise<SignInData | null> {
    const user = await this.userService.findUserByName(input.username);
    if (user && user.password === input.password) {
      return {
        userId: user.userId,
        username: user.username,
      };
    }
    return null;
  }
  async signIn(user: SignInData): Promise<AuthResult> {
    const tokenPayload = {
      sub: user.userId,
      username: user.username,
    };
    const accessToken = await this.jwtService.signAsync(tokenPayload);
    return {
      accessToken,
    };
  }
  async signUp(user: SignUpData): Promise<AuthResult> {
    try {
      const hashPassword = await bcrypt.hash(user.password, 10);
      const create = await this.prismaService.customer.create({
        data: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: hashPassword,
          phoneNumber: user.phoneNumber,
          address: user.password,
        },
      });
      const token =
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
