import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

/**
 * Bootstraps the NestJS application.
 *
 * This function initializes the NestJS application using the `AppModule`,
 * applies global validation pipes to handle input validation across all routes,
 * and starts the application on the specified port (from environment variable or defaults to 3000).
 *
 * Global ValidationPipe options:
 * - `whitelist`: Removes any properties not defined in the DTOs.
 * - `forbidNonWhitelisted`: Throws an error if non-whitelisted properties are present.
 * - `transform`: Automatically transforms payloads to be objects typed according to their DTO classes.
 *
 * @example
 * // Run the app on port 3000 or the value defined in process.env.PORT
 * bootstrap();
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  /*
   *Swagger configuration
   */

  const config = new DocumentBuilder().setVersion('1.0').build();
  // Instanstiate  Document
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
