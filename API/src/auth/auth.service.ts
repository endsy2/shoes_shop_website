import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { log } from 'console';
import { create } from 'domain';

type AuthInput = { email: string; password: string };
type SignInData = { userId: number; email: string };
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
    const user = await this.userService.findUserByName(input.email);
    // if (user && user.password === input.password) {
    //   return {
    //     userId: user.userId,
    //     email: user.email,
    //   };
    // }
    console.log(user);

    return null;
  }
  async signIn(user: SignInData): Promise<AuthResult> {
    const tokenPayload = {
      sub: user.userId,
      email: user.email,
    };
    const accessToken = await this.jwtService.signAsync(tokenPayload);
    return {
      accessToken,
    };
  }
  async signUp(user: SignUpData) {
    try {
      // Hash the password
      const hashPassword = await bcrypt.hash(user.password, 10);

      // Create the user in the database
      const createdUser = await this.prismaService.customer.create({
        data: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: hashPassword,
          phoneNumber: user.phoneNumber,
          address: user.address,
        },
      });

      console.log('Created User:', createdUser.email);

      // Generate token (assuming signIn expects an object)
      const token = await this.signIn({
        userId: createdUser.id,
        email: createdUser.email,
      });

      return {
        accessToken: token,
      };
    } catch (error) {
      console.error('Signup Error:', error);
      throw new UnauthorizedException('Signup failed.');
    }
  }
}
