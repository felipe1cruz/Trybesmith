import OrdersModel from '../models/OrdersModel';
import connection from '../models/connection';

class OrdersService {
  private model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public getAllOrders = async () => {
    const orders = await this.model.getAllOrders();
    
    return orders;
  };
} 

export default OrdersService;