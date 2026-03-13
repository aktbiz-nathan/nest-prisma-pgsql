import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
// import { CustomerModule } from './customer/customer.module';
// import { CustomerController } from './customer/customer.controller';
// import { CustomerService } from './customer/customer.service';
import { CarsModule } from './cars/cars.module';
import { ProductModule } from './product/product.module';
import { GlobalModule } from './global/global.module';

/* This App Module means, the root of all controllers provicders etc. of the app */
/* @Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService],
}) */
/* 
  Whenever we've controllers, we need to register it to module
*/
@Module({
  imports: [
    UsersModule,
    // CustomerModule,
    CarsModule,
    ProductModule,
    GlobalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  /* It's a bad practice to put the Customer Service/Controller on main module.
     But for learning Service Providers & Dependency Injection, it should be fine.
  */
  /*  controllers: [CustomerController],
  providers: [CustomerService], */
})
export class AppModule {}

/*
  Modules are used by Nest to organize the application structure into scopes, a class that has a Module decorator,
  which takes an object of 4 different properties. They are are imports, controllers, providers, and exports.
*/
