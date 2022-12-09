import Product from '../interfaces/Products.interface';
import ProductsModel from '../models/ProductsModel';
import connection from '../models/connection';

class ProductsService {
  private model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public create = async (product: Product): Promise<Product> => {
    const created: Product = await this.model.addProduct(product);
    return created;
  };

  public getAllProducts = async (): Promise<Product[]> => {
    const products: Product[] = await this.model.getAllProducts();
  
    return products;
  };

  public getProductById = async (id: number): Promise<Product | null> => {
    const product: Product | null = await this.model.getProductById(id);
    return product;
  };
} 

export default ProductsService;