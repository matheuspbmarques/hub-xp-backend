import { Provider } from "@nestjs/common";
import { Connection } from "mongoose";
import { DATABASE_CONNECTION, PRODUCT_MODEL } from "src/common/constants";
import { ProductSchema } from "./product.schema";

export const productsProviders: Provider[] = [
	{
		provide: PRODUCT_MODEL,
		useFactory: (connection: Connection) =>
			connection.model("Product", ProductSchema),
		inject: [DATABASE_CONNECTION],
	},
];
