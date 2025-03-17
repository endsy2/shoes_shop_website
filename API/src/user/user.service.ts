import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

export type User = {
  userId: number;
  username: string;
  password: string;
};
const users: User[] = [
  {
    userId: 1,
    username: 'test1',
    password: '123',
  },
  {
    userId: 2,
    username: 'test2',
    password: '123',
  },
];

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async checkout(createOrderDTO) {
    try {
      // Calculate total amount
      const totalAmount = createOrderDTO.orderItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );

      console.log(`Total Amount: ${totalAmount}`);

      // Insert Order
      const insertOrder = await this.prisma.order.create({
        data: {
          customerId: createOrderDTO.customerId,
          totalAmount: totalAmount,
        },
      });

      // Insert Order Items
      await this.prisma.orderitem.createMany({
        data: createOrderDTO.orderItems.map((item) => ({
          orderId: insertOrder.id,
          productVariantId: item.productVariantId,
          quantity: item.quantity,
          amount: item.price * item.quantity, // Fix: Using `amount` instead of `price`
        })),
      });

      return { message: 'Order placed successfully' };
    } catch (error) {
      console.error('Checkout Error:', error);
      throw new Error(`Something went wrong: ${error}`);
    }
  }
  async findUserByName(username: string): Promise<User | undefined> {
    return users.find((user) => user.username === username);
  }
}
