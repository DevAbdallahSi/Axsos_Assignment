// src/api/auth.ts
import { api } from './client';

export type User = {
    id: string;
    name: string;
    email: string;
    roles: string[];
};

export type AuthResponse = {
    token: string;
    user: User;
};

export async function signup(name: string, email: string, password: string) {
    return api.post<AuthResponse>('/auth/signup', { name, email, password });
}

export async function login(email: string, password: string) {
    return api.post<AuthResponse>('/auth/login', { email, password });
}
