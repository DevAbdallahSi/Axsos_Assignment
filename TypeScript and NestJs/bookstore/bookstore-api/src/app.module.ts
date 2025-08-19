import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
    imports: [
        // 1) Load environment variables globally from .env
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),

        // 2) Enable rate limiting app-wide (10 requests per 60s per IP)
        ThrottlerModule.forRoot([
            {
                ttl: 60_000, // time window in ms
                limit: 10, // max requests within that window
            },
        ]),
        MongooseModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                uri: config.get<string>('MONGODB_URI'),
                // optional, nice defaults:
                // dbName: 'bookstore', // if you want to override db from URI
            }),
        }),

        AuthModule,

        UsersModule,

        BooksModule,
    ],
    controllers: [AppController], // 👈
    providers: [AppService],
})
export class AppModule { }
