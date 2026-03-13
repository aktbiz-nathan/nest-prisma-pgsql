import { Injectable } from '@nestjs/common';

/* 
  The Injectable decorator marks the class as a provider that can be injected into other classes.
*/
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
