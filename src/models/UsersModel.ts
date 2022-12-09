import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/User.interface';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async addUser(user: User): Promise<User> {
    const { username, classe, level, password } = user;
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password) 
    VALUES (?, ?, ?, ?)`;
    const [result] = await this.connection
      .execute<ResultSetHeader>(query, [username, classe, level, password]);

    const { insertId: id } = result;

    const created: User = { id, ...user };
    return created;
  }
}