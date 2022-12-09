import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../interfaces/User.interface';
import UserService from '../services/UsersService';

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public addUser = async (req: Request, res: Response) => {
    const user = req.body as User;
    const created: User = await this.service.addUser(user);
    const token = jwt.sign(created, 'secret');
    res.status(201).json({ token });
  };
}

// teste