import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { login as apiLogin, signup as apiSignup } from '../api/auth';
import type { AuthResponse, User } from '../api/auth';
import { setTokenGetter } from '../api/client';

type AuthState = {
    user: User | null;
    token: string | null;
    loading: boolean;
    error: string | null;
};

type AuthContextType = AuthState & {
    login: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Allow api client to read current token
    useEffect(() => {
        setTokenGetter(() => token);
    }, [token]);

    // bootstrap from localStorage
    useEffect(() => {
        const t = localStorage.getItem('token');
        const u = localStorage.getItem('user');
        if (t && u) {
            setToken(t);
            try { setUser(JSON.parse(u) as User); } catch {/* ignore */ }
        }
    }, []);

    function persist(res: AuthResponse) {
        setToken(res.token);
        setUser(res.user);
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
    }

    async function login(email: string, password: string) {
        setLoading(true); setError(null);
        try {
            const res = await apiLogin(email, password);
            persist(res);
        } catch (e: any) {
            setError(e?.message ?? 'Login failed');
            throw e;
        } finally {
            setLoading(false);
        }
    }

    async function signup(name: string, email: string, password: string) {
        setLoading(true); setError(null);
        try {
            const res = await apiSignup(name, email, password);
            persist(res);
        } catch (e: any) {
            setError(e?.message ?? 'Signup failed');
            throw e;
        } finally {
            setLoading(false);
        }
    }

    function logout() {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    const value = useMemo<AuthContextType>(() => ({
        user, token, loading, error, login, signup, logout,
    }), [user, token, loading, error]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
}
