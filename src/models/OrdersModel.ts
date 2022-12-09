import { Pool, ResultSetHeader } from 'mysql2/promise';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAllOrders = async () => {
    const query = `SELECT ord.id, ord.userId, JSON_ARRAYAGG(pr.id) AS productsIds
    FROM Trybesmith.Orders AS ord
    INNER JOIN Trybesmith.Products AS pr
    ON ord.id = pr.orderId
    GROUP BY ord.id`;
    const [result] = await this.connection.execute<ResultSetHeader>(query);
    
    return result;
  };
} 