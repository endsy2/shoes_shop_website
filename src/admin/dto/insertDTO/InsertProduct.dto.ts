import { Transform } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  isNotEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
} from 'class-validator';

export class InsertProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @Transform(({ value }) => parseFloat(value)) // Transform the input to a number
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'Price must be a valid number' },
  ) // Validate as a number with up to 2 decimal places
  @Min(0, { message: 'Price must be a positive number' }) // Ensure price is non-negative
  price: number;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  color: string;
}
