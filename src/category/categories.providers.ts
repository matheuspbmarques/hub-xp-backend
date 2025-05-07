import { Provider } from "@nestjs/common";
import { Connection } from "mongoose";
import { CATEGORY_MODEL, DATABASE_CONNECTION } from "src/common/constants";
import { CategorySchema } from "./category.schema";

export const categoriesProviders: Provider[] = [
	{
		provide: CATEGORY_MODEL,
		useFactory: (connection: Connection) =>
			connection.model("Category", CategorySchema),
		inject: [DATABASE_CONNECTION],
	},
];
