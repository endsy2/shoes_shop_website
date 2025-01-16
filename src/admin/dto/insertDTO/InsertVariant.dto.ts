import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class insertVariantDTO {
    @IsString()
    @IsNotEmpty()
    productName: string;

    @IsString()
    @IsNotEmpty()
    color: string;

    @IsNumber()
    @Transform(({ value }) => parseFloat(value))
    price: number;
}
