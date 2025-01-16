import { IsNotEmpty, IsString } from 'class-validator';

export class InsertbrandDTO {
  @IsString()
  @IsNotEmpty()
  brand_name: string;
}
