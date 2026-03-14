import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import middleware1 from './middleware/middleware1';
import middleware2 from './middleware/middleware2';
import { HttpExceptionFilter } from './exception-filters/http-exception.filter';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* Functional Middleware Example */
  // app.use(middleware1);
  app.use(middleware2);
  // app.use(new Middleware3());
  const loggerInstance = app.get(Logger);
  app.useGlobalFilters(new HttpExceptionFilter(loggerInstance));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
