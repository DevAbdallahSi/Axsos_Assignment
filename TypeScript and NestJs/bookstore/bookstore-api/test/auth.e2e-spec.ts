import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { bootstrapTestApp } from './utils';

describe('Auth E2E', () => {
    let app: INestApplication;

    beforeAll(async () => {
        app = await bootstrapTestApp();
    });

    afterAll(async () => {
        await app.close();
    });

    it('should sign up a user', async () => {
        const res = await request(app.getHttpServer())
            .post('/auth/signup')
            .send({ name: 'Alice', email: 'alice@test.com', password: 'password123' })
            .expect(201);

        expect(res.body).toHaveProperty('token');
    });

    it('should login a user', async () => {
        const res = await request(app.getHttpServer())
            .post('/auth/login')
            .send({ email: 'alice@test.com', password: 'password123' })
            .expect(201);

        expect(res.body).toHaveProperty('token');
    });

    it('should reject wrong login', async () => {
        await request(app.getHttpServer())
            .post('/auth/login')
            .send({ email: 'alice@test.com', password: 'wrongpass' })
            .expect(401);
    });
});
