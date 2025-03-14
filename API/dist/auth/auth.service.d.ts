import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';
type AuthInput = {
    username: string;
    password: string;
};
type SignInData = {
    userId: number;
    username: string;
};
type SignUpData = {
    email: string;
    password: string;
    address: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
};
type AuthResult = {
    accessToken: string;
};
export declare class AuthService {
    private userService;
    private jwtService;
    private prismaService;
    constructor(userService: UserService, jwtService: JwtService, prismaService: PrismaService);
    authenticate(input: AuthInput): Promise<AuthResult>;
    validateUser(input: AuthInput): Promise<SignInData | null>;
    signIn(user: SignInData): Promise<AuthResult>;
    signUp(user: SignUpData): Promise<AuthResult>;
}
export {};
