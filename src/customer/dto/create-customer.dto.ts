import { z } from 'zod';

export const createCustomerSchema = z
  .object({
    name: z.string(),
    age: z.number(),
  })
  .required();

export type CreateCustomerDto = z.infer<typeof createCustomerSchema>;
