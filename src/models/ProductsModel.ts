import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/Products.interface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async addProduct(product: Product): Promise<Product> {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [result] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    const { insertId: id } = result;

    const created: Product = { id, ...product };
    return created;
  }

  public getAllProducts = async (): Promise<Product[]> => {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [result] = await this.connection.execute(query);
    
    return result as Product[];
  };

  public getProductById = async (id: number): Promise<Product | null> => {
    const query = 'SELECT * FROM Trybesmith.Products WHERE id = ?';
    
    const [data] = await this.connection.execute(query, [id]);
    const [product] = data as Product[];
    return product || null;
  }; 
}