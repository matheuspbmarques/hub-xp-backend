import { Inject } from "@nestjs/common";
import { Model } from "mongoose";
import { CATEGORY_MODEL } from "src/common/constants";
import { Category } from "./category.interface";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

export class CategoryService {
	constructor(
		@Inject(CATEGORY_MODEL)
		private categoryModel: Model<Category>,
	) {}

	async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
		return await this.categoryModel.create(createCategoryDto);
	}

	async getAll(): Promise<Category[]> {
		return await this.categoryModel.find();
	}

	async update(
		categoryId: string,
		updateCategoryDto: UpdateCategoryDto,
	): Promise<void> {
		await this.categoryModel.updateOne(
			{ _id: categoryId },
			updateCategoryDto,
		);
	}

	async remove(categoryId: string): Promise<void> {
		await this.categoryModel.deleteOne({ _id: categoryId });
	}
}
