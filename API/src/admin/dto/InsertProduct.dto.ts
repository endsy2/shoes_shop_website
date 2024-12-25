import { Transform } from 'class-transformer';
import {
    ArrayNotEmpty,
    IsArray,
    IsNotEmpty,
    IsNumber,
    IsString,
} from 'class-validator';

export class InsertProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @Transform(({ value }) => parseInt(value, 10))
    price: number;

    @IsString()
    @IsNotEmpty()
    brand: string;

    //   @IsArray()
    //   @ArrayNotEmpty()
    //   @IsString({ each: true }) // Ensures each element in the array is a string
    //   images: string[];
}
