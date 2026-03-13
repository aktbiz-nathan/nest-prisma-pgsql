/* 
Is a function which is called before the route handler.
It's function have access to the request and response objects, and the next()
Middleware function application's request-response cycle.
On default it's equivalent to express.js middleware.
*/
import { NextFunction, Request, Response } from 'express';
export default (req: Request, res: Response, next: NextFunction) => {
  console.log(
    'Middleware 2 reached: Make a request to',
    req.method,
    req.originalUrl,
  );
  /* Example Output: Make a request to GET /product */
  next(); /* This must be called to pass control. Otherwise, the request will left hanging */
};
