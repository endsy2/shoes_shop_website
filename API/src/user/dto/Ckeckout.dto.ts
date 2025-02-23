import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Checkout {
  @IsString()
  @IsNotEmpty()
  productName: string;

  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => (isNaN(Number(value)) ? 0 : Number(value))) // Ensures valid number conversion
  quantity: number;

  @IsString()
  @IsNotEmpty()
  customerName: string;
}
