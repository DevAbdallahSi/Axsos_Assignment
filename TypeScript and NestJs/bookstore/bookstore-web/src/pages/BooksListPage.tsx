import { useEffect, useState } from 'react';
import type { BookList } from '../api/books';
import { BooksAPI } from '../api/books';

export default function BooksListPage() {
    const [data, setData] = useState<BookList | null>(null);
    const [q, setQ] = useState('');
    const [page, setPage] = useState(1);
    const limit = 8; // page size
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true); setErr(null);
        BooksAPI.list({ page, limit, q })
            .then(setData)
            .catch((e: any) => setErr(e?.message ?? 'Failed to load'))
            .finally(() => setLoading(false));
    }, [page, q]);

    return (
        <div style={{ padding: 24 }}>
            <h1>Books</h1>

            <div style={{ marginBottom: 16 }}>
                <input
                    placeholder="Search by title..."
                    value={q}
                    onChange={(e) => { setPage(1); setQ(e.target.value); }}
                />
            </div>

            {loading && <p>Loading…</p>}
            {err && <p style={{ color: 'crimson' }}>{err}</p>}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
                {data?.items.map(b => (
                    <a key={b._id} href={`/books/${b._id}`} style={{ border: '1px solid #ddd', padding: 12, borderRadius: 8, textDecoration: 'none', color: 'inherit' }}>
                        <h3 style={{ margin: '4px 0' }}>{b.title}</h3>
                        <div>{b.author}</div>
                        <small>{b.category} • ${b.price}</small>
                    </a>
                ))}
            </div>

            {data && data.pages > 1 && (
                <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
                    <button disabled={page <= 1} onClick={() => setPage(p => p - 1)}>Prev</button>
                    <span>Page {page} / {data.pages}</span>
                    <button disabled={page >= data.pages} onClick={() => setPage(p => p + 1)}>Next</button>
                </div>
            )}
        </div>
    );
}
