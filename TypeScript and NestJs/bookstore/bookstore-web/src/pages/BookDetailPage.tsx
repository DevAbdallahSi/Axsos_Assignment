import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BooksAPI } from '../api/books';
import type { Book } from '../api/books';
import { useAuth } from '../context/AuthContext';

export default function BookDetailPage() {
    const { id } = useParams();
    const nav = useNavigate();
    const { user } = useAuth();
    const [book, setBook] = useState<Book | null>(null);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState<string | null>(null);
    const [removing, setRemoving] = useState(false);

    useEffect(() => {
        if (!id) return;
        setLoading(true); setErr(null);
        BooksAPI.get(id)
            .then(setBook)
            .catch((e: any) => setErr(e?.message ?? 'Failed to load'))
            .finally(() => setLoading(false));
    }, [id]);

    async function onDelete() {
        if (!id) return;
        if (!confirm('Delete this book?')) return;
        setRemoving(true);
        try {
            await BooksAPI.remove(id);
            nav('/books');
        } catch (e: any) {
            alert(e?.message ?? 'Failed to delete');
        } finally {
            setRemoving(false);
        }
    }

    if (loading) return <div style={{ padding: 24 }}>Loading…</div>;
    if (err) return <div style={{ padding: 24, color: 'crimson' }}>{err}</div>;
    if (!book) return null;

    const iOwn = user && (user.id === String(book.user));

    return (
        <div style={{ padding: 24 }}>
            <Link to="/books">← Back to list</Link>
            <h1>{book.title}</h1>
            <p><b>Author:</b> {book.author}</p>
            <p><b>Category:</b> {book.category}</p>
            <p><b>Price:</b> ${book.price}</p>
            {book.description && <p style={{ marginTop: 8 }}>{book.description}</p>}

            {iOwn && (
                <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
                    <Link to={`/books/${book._id}/edit`}><button>Edit</button></Link>
                    <button onClick={onDelete} disabled={removing}>{removing ? 'Deleting…' : 'Delete'}</button>
                </div>
            )}
        </div>
    );
}
