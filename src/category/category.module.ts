import { Module } from "@nestjs/common";
import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";
import { categoriesProviders } from "./categories.providers";

@Module({
	controllers: [CategoryController],
	providers: [CategoryService, ...categoriesProviders],
})
export class CategoryModel {}
