/* Functional Middleware Example */
import { NextFunction, Request, Response } from 'express';
export default (req: Request, res: Response, next: NextFunction) => {
  console.log('Middleware 1 reached');
  // res.send({ name: 'What is name?' });
  next();
};
