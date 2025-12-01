import { ExtendedRequest } from "../libs/types/member";
import { T } from "../libs/types/common";
import restaurantController from "./restaurant.controller";
import { Response } from "express";
import Errors, { HttpCode } from "../libs/Error";
import OrderService from "../models/Order.service";
import { OrderInquiry, OrderUpdateINput } from "../libs/types/order";
import { OrderStatus } from "../libs/enums/order.enum";

const orderController: T = {};

const orderService = new OrderService();

orderController.createOrder = async (req: ExtendedRequest, res: Response) => {
  try {
    console.log("createOrder");
    const result = await orderService.createOrder(req.member, req.body);

    res.status(HttpCode.CREATED).json(result);
  } catch (err) {
    console.log("Error, createOrder:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

orderController.getMyOrders = async (req: ExtendedRequest, res: Response) => {
    try {
    console.log("getMyOrders");
    const {page, limit, orderStatus} = req.query;
    const inuiry: OrderInquiry = {
        page: Number(page),
        limit: Number(limit),
        orderStatus: orderStatus as OrderStatus
    }
    const result = await orderService.getMyOrders(req.member, inuiry);
    res.status(HttpCode.CREATED).json(result);
  } catch (err) {
    console.log("Error, getMyOrders:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
}

orderController.updateOrder = async (req: ExtendedRequest, res: Response) => {
    try {
    console.log("updateOrder");
    const input: OrderUpdateINput = req.body;
    const result = await orderService.updateOrder(req.member, input);
    
    res.status(HttpCode.CREATED).json(result);
  } catch (err) {
    console.log("Error, updateOrder:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
}

export default orderController;
