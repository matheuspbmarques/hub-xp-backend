import { Type } from "class-transformer";
import { IsArray, IsNumber, IsString, IsUrl } from "class-validator";

export class CreateProductDto {
	@IsString()
	name: string;

	@IsString()
	description: string;

	@IsNumber()
	@Type(() => Number)
	price: number;

	@IsArray()
	@IsString({ each: true })
	categoryIds: string[];

	@IsString()
	@IsUrl()
	imageUrl: string;
}
