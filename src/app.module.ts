import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { ProductModule } from "./product/product.module";
import { CategoryModel } from "./category/category.module";
import { DatabaseModule } from "./database/database.module";

@Module({
	imports: [
		DatabaseModule,
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		ProductModule,
		CategoryModel,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
