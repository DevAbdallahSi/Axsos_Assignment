// src/pages/HealthPage.tsx
import { useEffect, useState } from 'react';
import { BASE_URL } from '../api/client'; // export this from client.ts (see below)

export default function HealthPage() {
    const [status, setStatus] = useState('Checking…');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`${BASE_URL}/`)
            .then(async (r) => {
                const text = await r.text();
                if (!r.ok) throw new Error(text || `HTTP ${r.status}`);
                setStatus(text || 'OK');
            })
            .catch((e: any) => setError(e?.message ?? 'Failed to reach API'));
    }, []);

    return (
        <div style={{ padding: 24 }}>
            <h1>Backend Health</h1>
            <p>API URL: {import.meta.env.VITE_API_URL ?? '(not set)'}</p>
            {error ? (
                <p style={{ color: 'crimson' }}>Error: {error}</p>
            ) : (
                <p>Status: <strong>{status}</strong></p>
            )}
        </div>
    );
}
