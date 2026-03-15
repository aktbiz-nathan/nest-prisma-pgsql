import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import middleware1 from './middleware/middleware1';
import middleware2 from './middleware/middleware2';
import { HttpExceptionFilter } from './exception-filters/http-exception.filter';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* Functional Middleware Example */
  // app.use(middleware1);
  app.use(middleware2);
  // app.use(new Middleware3());
  const loggerInstance = app.get(Logger);
  app.useGlobalFilters(new HttpExceptionFilter(loggerInstance));
  /* In production:
    - disableErrorMessages should be true, because we don't want to expose internal error details to the client
    - whitelist should be true, because we want to strip out/remove any properties that are not defined in the DTO.
    - forbidNonWhitelisted should be true, because we want to throw an error if there are any properties that are not defined in the DTO. 
      But the whitelist should be true first 
    - 
  */

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
