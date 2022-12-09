import { Router } from 'express';
import OrdersController from '../controller/OrdersController';

const router = Router();

const controller = new OrdersController();

router.get('/', controller.getAllOrders);

export default router;