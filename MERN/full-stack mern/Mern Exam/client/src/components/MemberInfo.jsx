import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import DeleteButton from './DeleteButton';



const DisplayInfo = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/user/' + id)
            .then(res => setUser(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const deleteUser = (id) => {
        axios.delete('http://localhost:8000/api/user/' + id)
            .then(() => {
                navigate("/");
            })
            .catch(err => console.error("Delete failed:", err));
    };



    return (
        <>
            <div >
                <p>UserName: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Gender: {user.gender}</p>
                <p>Details: {user.details}</p>
            </div>

            <Link to={`/edit/${id}`} className="btn btn-sm btn-outline-primary ms-2">
                Edit Member
            </Link>
            <button
                onClick={() => deleteUser(user._id)}
                style={{
                    marginLeft: '10px',
                    color: 'white',
                    background: 'red',
                    border: 'none',
                    padding: '4px 8px',
                    borderRadius: '4px'
                }}
            >
                Delete
            </button>
            <button
                type="button"
                className="btn btn-secondary ms-2"
                onClick={() => navigate("/")}
            >
                back to Dashboard
            </button>
        </>
    );
};

export default DisplayInfo;