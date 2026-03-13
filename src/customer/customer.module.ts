import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';

/* CustomerService shouldn't be provided here — it comes from GlobalModule (global scope).
   Providing it here would create a second, separate instance with its own empty array,
   causing CustomerController and ProductController to see different data. */
@Module({
  controllers: [CustomerController],
})
export class CustomerModule {}
