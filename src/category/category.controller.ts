import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	Post,
	Put,
} from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { Category } from "./category.interface";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@Controller("category")
export class CategoryController {
	constructor(private categoryService: CategoryService) {}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	async create(
		@Body() createCategoryDto: CreateCategoryDto,
	): Promise<Category> {
		return await this.categoryService.create(createCategoryDto);
	}

	@Get()
	@HttpCode(HttpStatus.OK)
	async getAll(): Promise<Category[]> {
		return await this.categoryService.getAll();
	}

	@Put(":id")
	@HttpCode(HttpStatus.NO_CONTENT)
	async udpate(
		@Param("id") id: string,
		@Body() updateCategoryDto: UpdateCategoryDto,
	): Promise<void> {
		await this.categoryService.update(id, updateCategoryDto);
	}

	@Delete(":id")
	@HttpCode(HttpStatus.NO_CONTENT)
	async remove(@Param("id") id: string): Promise<void> {
		await this.categoryService.remove(id);
	}
}
