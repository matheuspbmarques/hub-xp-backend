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
import { CreateProductDto } from "./dto/create-product.dto";
import { Product } from "./product.interface";
import { ProductService } from "./product.service";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductIdParamDto } from "./dto/product-id-param.dto";

@Controller("products")
export class ProductController {
	constructor(private productService: ProductService) {}

	@Post()
	@HttpCode(201)
	async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
		return await this.productService.create(createProductDto);
	}

	@Get()
	@HttpCode(200)
	async getAll(): Promise<Product[]> {
		return await this.productService.getAll();
	}

	@Put(":id")
	@HttpCode(HttpStatus.NO_CONTENT)
	async update(
		@Param("id") id: ProductIdParamDto["id"],
		@Body() updateProductDto: UpdateProductDto,
	): Promise<void> {
		await this.productService.update(id, updateProductDto);
	}

	@Delete(":id")
	@HttpCode(HttpStatus.NO_CONTENT)
	async remove(@Param("id") id: ProductIdParamDto["id"]): Promise<void> {
		await this.productService.remove(id);
	}
}
