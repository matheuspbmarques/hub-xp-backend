import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	Post,
	Put,
} from "@nestjs/common";
import { CreateOrderDto } from "./dto/create-order.dto";
import { Order } from "./order.interface";
import { OrderService } from "./order.service";
import { UpdateOrderDto } from "./dto/update-order.dto";

@Controller("order")
export class OrderController {
	constructor(private orderService: OrderService) {}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	async create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
		return await this.orderService.create(createOrderDto);
	}

	@Get()
	@HttpCode(HttpStatus.OK)
	async getAll(): Promise<Order[]> {
		return await this.orderService.getAll();
	}

	@Put(":id")
	@HttpCode(HttpStatus.NO_CONTENT)
	async update(
		@Param("id") id: string,
		@Body() updateOrderDto: UpdateOrderDto,
	): Promise<void> {
		await this.orderService.update(id, updateOrderDto);
	}

	@Delete(":id")
	@HttpCode(HttpStatus.NO_CONTENT)
	async remove(@Param("id") id: string): Promise<void> {
		await this.orderService.remove(id);
	}
}
