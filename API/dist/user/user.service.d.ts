import { PrismaService } from 'src/prisma/prisma.service';
export type User = {
    userId: number;
    username: string;
    password: string;
};
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    checkout(createOrderDTO: any): Promise<{
        message: string;
    }>;
    findUserByName(username: string): Promise<User | undefined>;
}
