// src/api/books.ts
import { api } from './client';

export type Category = 'Fiction' | 'Non-Fiction' | 'Science' | 'History';

export type Book = {
    _id: string;
    title: string;
    author: string;
    description?: string;
    price: number;
    category: Category;
    user: string;       // owner id
    createdAt?: string;
    updatedAt?: string;
};

export type BookList = {
    items: Book[];
    total: number;
    page: number;
    limit: number;
    pages: number;
};

export type CreateBookInput = {
    title: string;
    author: string;
    description?: string;
    price: number;
    category: Category;
};

export type UpdateBookInput = Partial<CreateBookInput>;

export const BooksAPI = {
    list: (opts?: { page?: number; limit?: number; q?: string }) => {
        const p = new URLSearchParams();
        if (opts?.page) p.set('page', String(opts.page));
        if (opts?.limit) p.set('limit', String(opts.limit));
        if (opts?.q) p.set('q', String(opts.q));
        const qs = p.toString() ? `?${p.toString()}` : '';
        return api.get<BookList>(`/books${qs}`);
    },

    get: (id: string) => api.get<Book>(`/books/${id}`),

    create: (data: CreateBookInput) => api.post<Book>('/books', data),

    update: (id: string, data: UpdateBookInput) => api.put<Book>(`/books/${id}`, data),

    remove: (id: string) => api.del<{ deleted: true }>(`/books/${id}`),
};
