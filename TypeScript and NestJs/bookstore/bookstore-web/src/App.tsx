import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HealthPage from './pages/HealthPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/loginPage';
import BooksListPage from './pages/BooksListPage';
import BookDetailPage from './pages/BookDetailPage';
import BookFormPage from './pages/BookFormPage';
import ProtectedRoute from './routes/ProtectedRoute';

function Dashboard() {
    return <div style={{ padding: 24 }}>Private dashboard (you are logged in)</div>;
}

export default function App() {
    return (
        <BrowserRouter>
            <nav style={{ display: 'flex', gap: 12, padding: 12, borderBottom: '1px solid #eee' }}>
                <Link to="/">Health</Link>
                <Link to="/books">Books</Link>
                <Link to="/books/new">New Book</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
                <Link to="/dashboard">Dashboard</Link>
            </nav>

            <Routes>
                <Route path="/" element={<HealthPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />

                <Route path="/books" element={<BooksListPage />} />
                <Route path="/books/:id" element={<BookDetailPage />} />

                <Route
                    path="/books/new"
                    element={
                        <ProtectedRoute>
                            <BookFormPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/books/:id/edit"
                    element={
                        <ProtectedRoute>
                            <BookFormPage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
