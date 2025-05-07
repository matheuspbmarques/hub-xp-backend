import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { DatabaseModule } from "src/database/database.module";
import { productsProviders } from "./products.providers";

@Module({
	imports: [DatabaseModule],
	controllers: [ProductController],
	providers: [ProductService, ...productsProviders],
})
export class ProductModule {}
