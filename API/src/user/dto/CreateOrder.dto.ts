import { IsInt, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { Transform, Type } from 'class-transformer';

class OrderItemDTO {
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  productVariantId: number;

  @IsInt()
  @Transform(({ value }) => parseInt(value))
  quantity: number;

  @IsNumber()
  @Transform(({ value }) => parseFloat(value)) // Convert price correctly
  price: number;
}

export class CreateOrderDTO {
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  customerId: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDTO)
  orderItems: OrderItemDTO[];
}
