import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

/* This codeblock was impractical since this acts as converting from string to number.
Nestjs already comes with a built-in pipes that are exported via @nestjs/common

ValidationPipe
ParseIntPipe
ParseFloatPipe
ParseBoolPipe
ParseArrayPipe
ParseUUIDPipe
ParseEnumPipe
DefaultValuePipe
ParseFilePipe
ParseDatePipe

Pipes operates on the arguments from the Route Handler (Controller) before it actually reaches the Route Handler (Controller).
So it can be used to transform the data or to validate the data.

Their 2 use cases:
transformation: transform input data to the desired form (e.g., from string to integer)
validation: evaluate input data and if valid, simply pass it through unchanged; otherwise, throw an exception

Pipes can be configured to run e.g.
new ParseIntPipe({ errorHttpStatusCode: 404 })
- errorHttpStatusCode: a number that represents the HTTP status code to be returned when the validation fails. E.g. 404, 400, 500, etc.
- exceptionFactory: a function that takes the error as an argument and returns an instance of HttpException. 
E.g. (error) => new BadRequestException('Custom error message', { cause: error })
- exceptionFactory(e) : e.g. (error) => new BadRequestException('Custom error message', { cause: error })
*/
@Injectable()
export class FirstPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('FirstPipe value:', value);
    console.log('FirstPipe metadata type:', metadata.type);
    console.log('FirstPipe metadata data:', metadata.data);
    return value;
  }
  /* 
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('FirstPipe value:', value);
    console.log('FirstPipe metadata:', metadata);
    return value;
  }
  Output:
  FirstPipe value: { name: 'asdsadada', age: 21 }
  FirstPipe metadata: { metatype: [Function: Object], type: 'body', data: undefined }
  */

  /* 
  console.log('FirstPipe value:', value);
  console.log('FirstPipe metadata type:', metadata.type);
  console.log('FirstPipe metadata data:', metadata.data);
  return Number(value);

  FirstPipe value: 10
  FirstPipe metadata type: query
  FirstPipe metadata data: limit
  */
}
