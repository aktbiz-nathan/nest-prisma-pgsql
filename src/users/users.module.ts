import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { CustomerModule } from '../customer/customer.module';

/* 
This is called Module re-exporting. 
Suppose UsersModule needs CustomerService and you also want any module 
that imports UsersModule to have access to CustomerService. 
You would import + re-export:
*/
@Module({
  imports: [CustomerModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [
    UsersService,
    CustomerModule,
  ] /* Whenever we want to use a provider in another module, we need to export it. */,
})
export class UsersModule {}
