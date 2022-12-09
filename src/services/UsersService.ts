import User from '../interfaces/User.interface';
import UsersModel from '../models/UsersModel';
import connection from '../models/connection';

class UsersService {
  private model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public addUser = async (user: User): Promise<User> => {
    const created: User = await this.model.addUser(user);
    return created;
  };
} 

export default UsersService;