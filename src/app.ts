import express, { Request, Response, NextFunction } from 'express';
import productsRouter from './router/products.router';
import usersRouter from './router/users.router';
import ordersRouter from './router/orders.router';

const app = express();

app.use(express.json());

app.use('/orders', ordersRouter);

app.use('/products', productsRouter);

app.use('/users', usersRouter);

app.use('/', (_req: Request, res: Response) => res.sendStatus(200));

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  if (err) {
    console.log(err);
    const { message } = err;
    res.status(200).json({ message });
  }
  console.log(err);
  res.status(500).json({ message: 'generic Error' });
});

export default app;
