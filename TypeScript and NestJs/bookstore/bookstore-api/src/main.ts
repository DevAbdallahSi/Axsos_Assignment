import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // 1) Security headers
    app.use(helmet());

    // 2) CORS (allow your frontend origin)
    app.enableCors({
        origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true, // allow cookies/authorization headers if needed
    });

    // 3) Global DTO validation
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true, // strips properties not in DTOs
            forbidNonWhitelisted: true, // throws if extra properties are sent
            transform: true, // auto-transform payloads to DTO types
            transformOptions: {
                enableImplicitConversion: true, // so "42" -> 42 for numbers in DTO
            },
        }),
    );

    // 4) Start server
    const port = Number(process.env.PORT) || 3000;
    await app.listen(port);
    console.log(`🚀 Server running on http://localhost:${port}`);
}
bootstrap();
