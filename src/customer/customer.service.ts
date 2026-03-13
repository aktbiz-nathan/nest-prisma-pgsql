import { Injectable } from '@nestjs/common';

/* A provider that can be injected as a dependency */
/* Provider scopes
  - DEFAULT: The default scope. Nest creates a single instance of the provider and shares it across the entire application. This is the most common scope and is suitable for services that maintain state or perform operations that should be consistent across the application.
  - TRANSIENT: Nest creates a new instance of the provider each time it is injected. This scope is useful for services that are stateless or need to maintain separate instances for different parts of the application.
  - REQUEST: Nest creates a new instance of the provider for each incoming request. This scope is ideal for services that need to maintain state specific to a single request, such as user authentication or request-specific data processing.
*/
@Injectable(/* {scope: Scope.DEFAULT} */)
export class CustomerService {
  customers: Record<string, unknown>[] = [];

  /* Customized Service functions */
  /* Fetch all customer */
  getAllCustomers(): Record<string, unknown>[] {
    console.log('getAllCustomers Service reached');
    return this.customers;
  }

  /* Create customer */
  createCustomer(customer: Record<string, unknown>): void {
    this.customers.push(customer);
  }
}
