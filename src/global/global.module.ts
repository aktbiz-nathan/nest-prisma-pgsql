import { Module, Global } from '@nestjs/common';
import { CustomerService } from 'src/customer/customer.service';

/* 
You can remove the exports: [CustomerService] in any other module.ts if you use @Global() decorator.
Then add CustomerService to the providers array of the global module and import the global module to the main app.module.ts.
Finally register the CustomerService by putting it on exports array.
*/
@Global()
@Module({
  providers: [CustomerService],
  exports: [CustomerService],
})
export class GlobalModule {}
