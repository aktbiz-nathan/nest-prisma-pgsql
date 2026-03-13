import { Controller, Get } from '@nestjs/common';
// import { CarsService } from './cars.service';
// import { CreateCarDto } from './dto/create-car.dto';
// import { UpdateCarDto } from './dto/update-car.dto';
import { CustomerService } from 'src/customer/customer.service';

/* 
  Nest can't resolve dependencies of the CarsController (?). Please make sure that the argument CustomerService at index [0] is available in the CarsModule module.

  Potential solutions:
  - Is CarsModule a valid NestJS module?
  - If CustomerService is a provider, is it part of the current CarsModule?
  - If CustomerService is exported from a separate @Module, is that module imported within CarsModule?
*/

@Controller('cars')
export class CarsController {
  constructor(private readonly customerService: CustomerService) {
    /* To use the customerService here in CarsController, put it on export module via customer.module.ts 
    and import the CustomerModule via cars.module.ts*/
  }

  @Get()
  getCustomers() {
    return this.customerService.getAllCustomers();
  }
}
