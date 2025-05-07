import { Module } from "@nestjs/common";
import { OrderController } from "./order.controller";
import { OrderService } from "./order.service";
import { ordersProdivers } from "./orders.providers";

@Module({
	controllers: [OrderController],
	providers: [OrderService, ...ordersProdivers],
})
export class OrderModule {}
