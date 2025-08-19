import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { bootstrapTestApp } from './utils';

describe('Books E2E', () => {
    let app: INestApplication;
    let token: string;
    let bookId: string;

    beforeAll(async () => {
        app = await bootstrapTestApp();

        // create user + login
        await request(app.getHttpServer())
            .post('/auth/signup')
            .send({ name: 'Bob', email: 'bob@test.com', password: 'password123' });

        const loginRes = await request(app.getHttpServer())
            .post('/auth/login')
            .send({ email: 'bob@test.com', password: 'password123' });

        token = loginRes.body.token;
    });

    afterAll(async () => {
        await app.close();
    });

    it('should create a book', async () => {
        const res = await request(app.getHttpServer())
            .post('/books')
            .set('Authorization', `Bearer ${token}`)
            .send({
                title: 'Clean Code',
                author: 'Robert Martin',
                price: 25,
                category: 'Non-Fiction',
            })
            .expect(201);

        expect(res.body).toHaveProperty('_id');
        bookId = res.body._id;
    });

    it('should list books', async () => {
        const res = await request(app.getHttpServer()).get('/books').expect(200);
        expect(res.body.docs.length).toBeGreaterThan(0);
    });

    it('should update a book', async () => {
        const res = await request(app.getHttpServer())
            .put(`/books/${bookId}`)
            .set('Authorization', `Bearer ${token}`)
            .send({ price: 30 })
            .expect(200);

        expect(res.body.price).toBe(30);
    });

    it('should delete a book', async () => {
        await request(app.getHttpServer())
            .delete(`/books/${bookId}`)
            .set('Authorization', `Bearer ${token}`)
            .expect(200);
    });
});
