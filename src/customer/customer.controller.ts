import {
  Controller,
  Get,
  Post,
  Body,
  /*   HttpException,
  HttpStatus,
  ForbiddenException, */
  BadRequestException,
  // UseFilters,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
// import { HttpExceptionFilter } from 'src/exception-filters/http-exception.filter';
import errors from 'src/config/errors.config';

@Controller('customer')
export class CustomerController {
  /* Now we injected the Customer Service in this controller.
    Then this Controller depends on CustomerService 'coz in anytime we create this controller.
    Think about the OOP whenever you create an instance of this controller,
    you're going to invoke the constructor right away (constructor(){}).

  */
  constructor(private customerService: CustomerService) {}

  /* Custom Get and Post Method */
  @Get()
  // @UseFilters(  new HttpExceptionFilter(),)
  /* To use the custom exception filter in this specific route. But if you place it at the controller level, 
  it will be applied to all routes in this controller. */
  getAllCustomers() {
    /* 
      ? throw new Error('Error ngani');
      The result was
      {
      "statusCode": 500,
      "message": "Internal server error"
      }
      
      Because this is not recognized by the NestJS framework, so it will return an error. 
      If we want to return a custom error, we can use the HttpException class provided by NestJS.
      */
    /* 
    ? throw new HttpException(
    ?  { error: true, serverTime: new Date(), message: 'Error ngani' },
    ?  HttpStatus.BAD_REQUEST,
    ?  {
    ?    cause: new Error('This is the cause of the error'),
    ?    description: 'This is the description of the error',
    ?  },);

     The cause argument was completely optional E.g.
      try {
         await this.service.findAll()
       } catch (error) {
         throw new HttpException({
           status: HttpStatus.FORBIDDEN,
           error: 'This is a custom message',
         }, HttpStatus.FORBIDDEN, {
           cause: error
         });
       }
       Only end user will see the message and status, 
       but the cause and description will be logged in the server logs.
      */
    /* 
    ? throw new ForbiddenException('ewan ko kung bakit forbidden');
    The result was:
    {
      "message": "ewan ko kung bakit forbidden",
      "error": "Forbidden",
      "statusCode": 403
    }
    */

    throw new BadRequestException(errors.validationFailed);
    /* 
    The result was:
    {
      "statusCode": 400,
      "message": "Bad Request ngani",
      "error": "Bad Request"
    }
    */
    // return this.customerService.getAllCustomers();
  }

  @Post()
  createCustomer(@Body() body) {
    return this.customerService.createCustomer(body);
  }
}
