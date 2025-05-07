import { Provider } from "@nestjs/common";
import { Connection } from "mongoose";
import { DATABASE_CONNECTION, ORDER_MODEL } from "src/common/constants";
import { orderSchema } from "./order.schema";

export const ordersProdivers: Provider[] = [
	{
		provide: ORDER_MODEL,
		useFactory: (connection: Connection) =>
			connection.model("Order", orderSchema),
		inject: [DATABASE_CONNECTION],
	},
];
