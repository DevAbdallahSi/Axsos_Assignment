import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { BooksAPI } from '../api/books';
import type { Category, CreateBookInput, UpdateBookInput } from '../api/books';
import { useAuth } from '../context/AuthContext';

const CATEGORIES: Category[] = ['Fiction', 'Non-Fiction', 'Science', 'History'];

export default function BookFormPage() {
    const { token } = useAuth(); // for route guard; api client will add header
    const { id } = useParams();  // if present → edit mode
    const nav = useNavigate();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState<number>(0);
    const [category, setCategory] = useState<Category>('Fiction');
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [err, setErr] = useState<string | null>(null);
    const editing = Boolean(id);

    useEffect(() => {
        if (!editing || !id) return;
        setLoading(true); setErr(null);
        BooksAPI.get(id)
            .then(b => {
                setTitle(b.title);
                setAuthor(b.author);
                setDescription(b.description || '');
                setPrice(b.price);
                setCategory(b.category);
            })
            .catch((e: any) => setErr(e?.message ?? 'Failed to load book'))
            .finally(() => setLoading(false));
    }, [id, editing]);

    async function onSubmit(e: FormEvent) {
        e.preventDefault();
        setSaving(true); setErr(null);
        try {
            if (editing && id) {
                const data: UpdateBookInput = { title, author, description, price, category };
                await BooksAPI.update(id, data);
                nav(`/books/${id}`);
            } else {
                const data: CreateBookInput = { title, author, description, price, category };
                const created = await BooksAPI.create(data);
                nav(`/books/${created._id}`);
            }
        } catch (e: any) {
            setErr(e?.message ?? 'Failed to save');
        } finally {
            setSaving(false);
        }
    }

    if (!token) return <div style={{ padding: 24 }}>Please log in.</div>;
    if (loading) return <div style={{ padding: 24 }}>Loading…</div>;

    return (
        <div style={{ padding: 24, maxWidth: 560 }}>
            <Link to="/books">← Back to list</Link>
            <h1>{editing ? 'Edit Book' : 'New Book'}</h1>

            <form onSubmit={onSubmit} style={{ display: 'grid', gap: 10 }}>
                <label>Title</label>
                <input value={title} onChange={e => setTitle(e.target.value)} required />

                <label>Author</label>
                <input value={author} onChange={e => setAuthor(e.target.value)} required />

                <label>Description</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)} rows={4} />

                <label>Price</label>
                <input type="number" min={0} step="0.01" value={price} onChange={e => setPrice(Number(e.target.value))} required />

                <label>Category</label>
                <select value={category} onChange={e => setCategory(e.target.value as Category)}>
                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>

                <button type="submit" disabled={saving}>{saving ? 'Saving…' : (editing ? 'Save changes' : 'Create')}</button>
            </form>

            {err && <p style={{ color: 'crimson' }}>{err}</p>}
        </div>
    );
}
