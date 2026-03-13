import { Module, NestModule, MiddlewareConsumer, Logger } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
// import { CustomerModule } from './customer/customer.module';
// import { CustomerController } from './customer/customer.controller';
// import { CustomerService } from './customer/customer.service';
import { CarsModule } from './cars/cars.module';
import { ProductModule } from './product/product.module';
import { GlobalModule } from './global/global.module';
import { LoggingMiddleware } from './middleware/middleware3';
import middleware1 from './middleware/middleware1';

/* This App Module means, the root of all controllers providers etc. of the app */
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
  providers: [AppService, Logger],
  /* It's a bad practice to put the Customer Service/Controller on main module.
     But for learning Service Providers & Dependency Injection, it should be fine.
  */
  /*  controllers: [CustomerController],
  providers: [CustomerService], */
})
/*
  Modules are used by Nest to organize the application structure into scopes, a class that has a Module decorator,
  which takes an object of 4 different properties. They are are imports, controllers, providers, and exports.
*/

/*
To register the class-based middleware
1. Import the middleware class in the module file.
2. Add the middleware class to the module's providers array.
3. Implement the NestModule interface in the module class.
4. Implement the configure() method in the module class.
5. Use the middleware in the configure() method using the MiddlewareConsumer.
*/
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    /* You can also implement functional middleware also */
    consumer
      .apply(middleware1, LoggingMiddleware)
      // .exclude('cars')
      .forRoutes('*');
    /* 
    This means, the middleware will be applied to all routes that start with /product
    Also you can apply the middleware to specific routes like this:
    ? consumer.apply(middleware1, Middleware3).forRoutes('product/:id');
    This means, the middleware will be applied to all routes
    that start with /product and have an id parameter

     Also you can apply the middleware to specific routes like this:
     ? consumer.apply(middleware1, Middleware3).forRoutes(CustomerController);
     This means, the middleware will be applied to all routes in the CustomerController

     For specificity you can also apply the middleware to specific routes like this:
     ? consumer.apply(middleware1, Middleware3).forRoutes({ path: 'product', method: RequestMethod.GET });
     This means, the middleware will be applied to all GET routes that start with /product and have an id parameter

     Finally can also apply the middleware to all routes like this:
     ? consumer.apply(middleware1, Middleware3).forRoutes('*');
     This means, the middleware will be applied to all routes
    */
  }
}
