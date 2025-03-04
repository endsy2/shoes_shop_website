import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    checkout(createOrderDTO: any): Promise<{
        message: string;
    }>;
}
