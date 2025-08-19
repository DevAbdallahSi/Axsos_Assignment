import { useState } from 'react';
import type { FormEvent } from 'react';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
    const { login, loading, error } = useAuth();
    const [email, setEmail] = useState('alice@example.com');
    const [password, setPassword] = useState('password123');
    const [done, setDone] = useState(false);

    async function onSubmit(e: FormEvent) {
        e.preventDefault();
        await login(email, password);
        setDone(true);
    }

    return (
        <div style={{ padding: 24, maxWidth: 420 }}>
            <h1>Log in</h1>
            <form onSubmit={onSubmit}>
                <label>Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" required />
                <label>Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" minLength={8} required />
                <button type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Log in'}</button>
            </form>
            {error && <p style={{ color: 'crimson' }}>{error}</p>}
            {done && <p style={{ color: 'green' }}>Logged in! 🎉</p>}
        </div>
    );
}
