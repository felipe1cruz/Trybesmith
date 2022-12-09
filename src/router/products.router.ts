import { Router } from 'express';
import ProductsController from '../controller/ProductsController';

const router = Router();

const controller = new ProductsController();

router.get('/', controller.getAllProducts);
router.post('/', controller.create);
router.get('/:id', controller.getProductById);

export default router;