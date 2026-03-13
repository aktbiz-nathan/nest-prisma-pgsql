/* Class-based middleware
This must have decorator @Injectable() and implement NestMiddleware interface. 
It must have a method use() which will be called before the route handler.
The use() method have access to the request and response objects.
*/

/* 
On initial implementation, and you run the application, you will get an error like this:
{
    "statusCode": 500,
    "message": "Internal server error"
}
This is because the class-based middleware is not registered in the module.
To fix this, you need to add the middleware to the module's providers array 
and then use it in the module's configure() method.
*/

/* 
Class-based middleware is more powerful than functional middleware 
because it can have dependencies injected into it.
*/

import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  /* For the Logger works, you need to inject the Logger in Module provider array in app.module.ts */
  constructor(private readonly logger: Logger) {}

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl: url } = req;
    const reqTime = new Date().getTime();

    res.on('finish', () => {
      const { statusCode } = res;
      const resTime = new Date().getTime();
      if (statusCode === 201 || statusCode === 200) {
        this.logger.log(
          `${method} ${url} ${statusCode} - ${resTime - reqTime}ms`,
        );
      }
    });
    /* Output: [Nest] 9224  - 03/14/2026, 4:37:05 AM     LOG GET /customer 200 - 3ms */

    next();
  }
}
