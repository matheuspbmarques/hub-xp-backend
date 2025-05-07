import { Type } from "class-transformer";
import { IsArray, IsDateString, IsNumber, IsString } from "class-validator";

export class CreateOrderDto {
	@IsString()
	name: string;

	@IsDateString()
	date: string;

	@IsArray()
	@IsString({ each: true })
	productIds: string[];

	@IsNumber()
	@Type(() => Number)
	total: number;
}
