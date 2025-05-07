import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { productsProviders } from "./products.providers";

@Module({
	controllers: [ProductController],
	providers: [ProductService, ...productsProviders],
})
export class ProductModule {}
