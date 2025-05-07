import * as mongoose from "mongoose";
import { DATABASE_CONNECTION } from "src/common/constants";

export const databaseProviders = [
	{
		provide: DATABASE_CONNECTION,
		useFactory: (): Promise<typeof mongoose> => {
			if (!process.env.MONGO_URI) {
				throw new Error(`MongoDB URI is undefined in .env`);
			}

			return mongoose.connect(process.env.MONGO_URI);
		},
	},
];
