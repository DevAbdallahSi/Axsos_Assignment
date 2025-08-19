// src/api/client.ts
export const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';

let _getToken = () => localStorage.getItem('token'); // simple getter you can override

export function setTokenGetter(fn: () => string | null) {
  _getToken = fn;
}

async function http<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = _getToken();
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
    credentials: 'include',
    ...options,
  });

  if (!res.ok) {
    // try to read server error body
    let message = `HTTP ${res.status}`;
    try {
      const data = await res.json();
      message = (data as any)?.message || message;
    } catch {/* ignore */}
    throw new Error(message);
  }
  // some endpoints may return plain text — try json then text
  const text = await res.text();
  try { return JSON.parse(text) as T; } catch { return text as unknown as T; }
}

export const api = {
  get:  <T>(path: string) => http<T>(path),
  post: <T>(path: string, body?: unknown) =>
    http<T>(path, { method: 'POST', body: body ? JSON.stringify(body) : undefined }),
  put:  <T>(path: string, body?: unknown) =>
    http<T>(path, { method: 'PUT', body: body ? JSON.stringify(body) : undefined }),
  del:  <T>(path: string) => http<T>(path, { method: 'DELETE' }),
};
