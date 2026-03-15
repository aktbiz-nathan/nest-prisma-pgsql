import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import errors from 'src/config/errors.config';
import { ZodType } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodType) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      // Use Zod's safeParse for validation
      const result = this.schema.safeParse(value);
      if (!result.success) {
        throw new Error(JSON.stringify(result.error));
      }
    } catch (e) {
      console.log('Validation error in ZodValidationPipe:', e);
      throw new BadRequestException(errors.validationFailed);
    }
  }
}
