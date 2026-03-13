import { Controller, Get } from '@nestjs/common';
import { CustomerService } from '../customer/customer.service';

@Controller('product')
export class ProductController {
  /* Applying provider exportation and module exportation:
    To use the CustomerService in the ProductController, we need to do two things:  
    1. implement this  "exports: [CustomerService]" in customer.module.ts
    2. implement this "imports: [CustomerModule]," in product.module.ts
  */
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getCustomersFromTheProductController() {
    return this.customerService.getAllCustomers();
  }
}
