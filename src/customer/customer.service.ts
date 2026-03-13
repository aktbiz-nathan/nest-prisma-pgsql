import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

/* A provider that can be injected as a dependency */
@Injectable()
export class CustomerService {
  customers: any[] = [];

  /* Customized Service functions */
  /* Fetch all customer */
  getAllCustomers() {
    return this.customers;
  }

  /* Create customer */
  createCustomer(customer: any) {
    this.customers.push(customer);
  }

  /* Generated CRUD service controller */
  create(createCustomerDto: CreateCustomerDto) {
    return 'This action adds a new customer';
  }

  findAll() {
    return `This action returns all customer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
