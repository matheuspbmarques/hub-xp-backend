import mongoose from "mongoose";

export const orderSchema = new mongoose.Schema({
	name: String,
	date: Date,
	productIds: Array<string>,
	total: Number,
});
