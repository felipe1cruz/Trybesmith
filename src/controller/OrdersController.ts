import { Request, Response } from 'express';
import OrdersService from '../services/OrdersService';

export default class OrdersController {
  private service: OrdersService;

  constructor() {
    this.service = new OrdersService();
  }

  public getAllOrders = async (req: Request, res: Response) => {
    const orders = await this.service.getAllOrders();

    return res.status(200).json(orders);
  };
}