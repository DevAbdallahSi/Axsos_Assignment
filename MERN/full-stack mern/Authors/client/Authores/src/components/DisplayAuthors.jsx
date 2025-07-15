import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const DisplayAuthor = () => {
    const [authors, setAuthors] = useState([]);
    const [message, setMessage] = useState(""); // Success message state
    const navigate = useNavigate();

    // Fetch authors once on mount
    useEffect(() => {
        fetchAuthors();
    }, []);

    const fetchAuthors = () => {
        axios
            .get("http://localhost:8000/api/authores")
            .then((res) => setAuthors(res.data))
            .catch((err) => console.error("Error fetching authors", err));
    };

    // Remove deleted author from state to update UI immediately
    const removeAuthorFromList = (deletedId) => {
        setAuthors((prevAuthors) => prevAuthors.filter((a) => a._id !== deletedId));
    };

    // Show success message for 2 seconds
    const showMessage = (msg) => {
        setMessage(msg);
        setTimeout(() => setMessage(""), 2000);
    };

    return (
        <div className="container mt-4">
            <h2>Author List</h2>

            {/* Temporary success alert */}
            {message && (
                <div className="alert alert-success" role="alert">
                    {message}
                </div>
            )}

            <Link to="/create/author" className="btn btn-warning btn-sm me-2">
                Add Author
            </Link>

            <table className="table table-striped table-bordered mt-3">
                <thead className="table-dark">
                    <tr>
                        <th>Author</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.length === 0 ? (
                        <tr>
                            <td colSpan="2" className="text-center">
                                No authors found.
                            </td>
                        </tr>
                    ) : (
                        authors.map((author) => (
                            <tr key={author._id}>
                                <td>{author.name}</td>
                                <td className="text-center">
                                    <Link
                                        to={`/edit/${author._id}`}
                                        className="btn btn-warning btn-sm me-2"
                                    >
                                        Edit
                                    </Link>
                                    <DeleteButton
                                        authorId={author._id}
                                        onSuccess={() => {
                                            removeAuthorFromList(author._id);
                                            showMessage("Author deleted successfully!");
                                            // Optionally: navigate("/");
                                        }}
                                    />
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DisplayAuthor;
