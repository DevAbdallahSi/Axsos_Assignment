import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const DisplayUser = () => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    // Fetch all players on mount
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios
            .get("http://localhost:8000/api/users")
            .then((res) => setUsers(res.data))
            .catch((err) => console.error("Error fetching Users", err));
    };

    const removeUserFromList = (id) => {
        setUsers(users.filter(user => user._id !== id));
    };

    const showMessage = (msg) => {
        setMessage(msg);
        setTimeout(() => setMessage(""), 2000);
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-3">Member List</h2>

            {message && (
                <div className="alert alert-success" role="alert">
                    {message}
                </div>
            )}
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Atendance</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length === 0 ? (
                        <tr>
                            <td colSpan="3" className="text-center">
                                No users found.
                            </td>
                        </tr>
                    ) : (
                        users.map((user) => (
                            <tr key={user._id}>
                                <td className="text-center"> <Link to={`/user/${user._id}`} className="btn btn-warning btn-sm me-2">{user.username}</Link>
                                </td>
                                <td>present</td>
                                <td>
                                    <DeleteButton
                                        userId={user._id}
                                        onDeleteSuccess={() => {
                                            removeUserFromList(user._id);
                                            showMessage("user deleted successfully!");
                                        }}
                                    />
                                </td>
                            </tr>


                        ))
                    )}
                </tbody>
            </table>
            <Link to="/create/user" className="btn btn-primary btn-sm mb-3">
                Add Member
            </Link>
        </div>
    );
};

export default DisplayUser;
