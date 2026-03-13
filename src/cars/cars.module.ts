import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
// import { CustomerModule } from 'src/customer/customer.module';

@Module({
  // imports: [CustomerModule],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
