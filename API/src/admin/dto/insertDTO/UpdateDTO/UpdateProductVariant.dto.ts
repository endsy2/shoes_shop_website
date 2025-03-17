import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class UpdateProductVariantDTO {
  @IsString()
  name: string;

  @IsString()
  brand: string;

  @IsString()
  category: string;

  @Transform(({ value }) => parseFloat(value))
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0, { message: 'price must be a positive number' })
  price: number;

  @IsString()
  description: string;

  @IsString()
  color: string;

  @IsString()
  size: string;
}
