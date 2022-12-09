import { Request, Response } from 'express';
import Product from '../interfaces/Products.interface';
import ProductsService from '../services/ProductsService';

export default class ProductsController {
  private service: ProductsService;

  constructor() {
    this.service = new ProductsService();
  }

  public create = async (req: Request, res: Response) => {
    const product = req.body as Product;
    const created: Product = await this.service.create(product);

    res.status(201).json(created);
  };

  public getAllProducts = async (req: Request, res: Response) => {
    const products: Product[] = await this.service.getAllProducts();
   
    return res.status(200).json(products);
  };

  public getProductById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product: Product | null = await this.service.getProductById(Number(id));

    if (!product) {
      res.status(404).json({ message: 'Product not found' });
    }
  };
}