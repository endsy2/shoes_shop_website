import { IsNotEmpty, IsString } from 'class-validator';

export class InsertCategoryDTO {
  @IsString()
  @IsNotEmpty()
  category_name: string;
}
