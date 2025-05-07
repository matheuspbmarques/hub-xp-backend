import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { ORDER_MODEL } from "src/common/constants";
import { Order } from "./order.interface";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";

@Injectable()
export class OrderService {
	constructor(
		@Inject(ORDER_MODEL)
		private orderModel: Model<Order>,
	) {}

	async create(createOrderDto: CreateOrderDto): Promise<Order> {
		return await this.orderModel.create(createOrderDto);
	}

	async getAll(): Promise<Order[]> {
		return await this.orderModel.find();
	}

	async update(
		orderId: string,
		updateOrderDto: UpdateOrderDto,
	): Promise<void> {
		await this.orderModel.updateOne({ _id: orderId }, updateOrderDto);
	}

	async remove(orderId: string): Promise<void> {
		await this.orderModel.deleteOne({ _id: orderId });
	}
}
