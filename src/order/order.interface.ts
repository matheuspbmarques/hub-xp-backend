import { Document } from "mongoose";

export interface Order extends Document {
	name: string;
	date: Date;
	productIds: string[];
	total: number;
}
