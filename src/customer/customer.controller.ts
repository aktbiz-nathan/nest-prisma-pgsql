import { Controller, Get, Post, Body } from '@nestjs/common';
import { CustomerService } from './customer.service';

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
  getAllCustomers() {
    return this.customerService.getAllCustomers();
  }

  @Post()
  createCustomer(@Body() body) {
    return this.customerService.createCustomer(body);
  }
}
