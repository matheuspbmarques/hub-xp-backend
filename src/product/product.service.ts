import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { PRODUCT_MODEL } from "src/common/constants";
import { Product } from "./product.interface";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductService {
	constructor(
		@Inject(PRODUCT_MODEL)
		private productModel: Model<Product>,
	) {}

	async create(createProductDto: CreateProductDto): Promise<Product> {
		return await this.productModel.create(createProductDto);
	}

	async getAll(): Promise<Product[]> {
		return this.productModel.find().exec();
	}

	async update(
		id: string,
		updateProductDto: UpdateProductDto,
	): Promise<void> {
		await this.productModel.updateOne({ _id: id }, updateProductDto);
	}

	async remove(id: string): Promise<void> {
		await this.productModel.deleteOne({ _id: id });
	}
}
