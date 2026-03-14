/* 
Exception filter was the built-in filter can automatically handle many cases for you, you may want full control over the exceptions layer.
It catches exceptions and formats the response sent back to the client. 
In this example, we are catching HttpException and returning a JSON response 
with the status code, timestamp, and path of the request. This allows us to have a consistent error response format across our application.
*/

import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

/* 
To implement the ExceptionFilter in specific controller go to e.g. customer.controller.ts
If you want to apply the filter globally, you can do so in the main.ts file using app.useGlobalFilters(new HttpExceptionFilter());
 */
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private logger: Logger) {}
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx =
      host.switchToHttp(); /* This means we are switching to the HTTP context */
    const response =
      ctx.getResponse<Response>(); /* This means we are getting the HTTP response object */
    const request =
      ctx.getRequest<Request>(); /* This means we are getting the HTTP request object */
    const status =
      exception.getStatus(); /* This means we are getting the status code from the HttpException */

    this.logger.error(
      `${request.method} ${request.originalUrl} ${status} error: ${exception.message}`,
    );

    const errorDetails =
      exception.getResponse(); /* This means we are getting the error details from the HttpException */

    /* This means we are formatting the response */
    response.status(status).json({
      error: true,
      errorDetails,
    });

    /* The Output was:
    Postman:
    {
      "error": true,
      "errorDetails": {
          "statusCode": 400,
          "message": "Validation failed",
          "error": "Bad Request",
          "code": "BAD_REQUEST"
        }
    }

    Terminal: [Nest] 17708  - 03/14/2026, 4:15:36 PM   ERROR GET /customer 400 error: Validation failed
      */
  }
}
