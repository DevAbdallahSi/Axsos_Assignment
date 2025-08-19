import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import type { FormEvent } from 'react';

export default function SignupPage() {
    const { signup, loading, error } = useAuth();
    const [name, setName] = useState('Alice');
    const [email, setEmail] = useState('alice@example.com');
    const [password, setPassword] = useState('password123');
    const [done, setDone] = useState(false);

    async function onSubmit(e: FormEvent) {
        e.preventDefault();
        await signup(name, email, password);
        setDone(true);
    }

    return (
        <div style={{ padding: 24, maxWidth: 420 }}>
            <h1>Create account</h1>
            <form onSubmit={onSubmit}>
                <label>Name</label>
                <input value={name} onChange={e => setName(e.target.value)} required />
                <label>Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" required />
                <label>Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" minLength={8} required />
                <button type="submit" disabled={loading}>{loading ? 'Creating...' : 'Sign up'}</button>
            </form>
            {error && <p style={{ color: 'crimson' }}>{error}</p>}
            {done && <p style={{ color: 'green' }}>Signed up! You are now logged in.</p>}
        </div>
    );
}
