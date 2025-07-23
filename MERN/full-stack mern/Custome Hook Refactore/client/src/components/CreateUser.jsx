// pages/CreatePlayer.js
import React from "react";
import UserForm from "./UserForm";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const CreateUser = () => {
    const navigate = useNavigate();

    const handleCreate = (formData, setErrors, resetForm) => {
        axios.post("http://localhost:8000/api/user", formData)
            .then(() => navigate("/"))
            .catch(err => {
                if (err.response?.data?.errors) {
                    const serverErrors = {};
                    for (let key in err.response.data.errors) {
                        serverErrors[key] = err.response.data.errors[key].message;
                    }
                    setErrors(serverErrors);
                }
            });
    };

    return (
        <>
        <h2>Create Member</h2>
            <Link to={`/`} className="btn btn-warning btn-sm me-2">Home</Link>
            <UserForm
                initialData={{ username: "", email: "",gender:"",details:"" }}
                onSubmitProps={handleCreate}
            />
            <button
                type="button"
                className="btn btn-secondary ms-2"
                onClick={() => navigate("/")}
            >
                Cancel
            </button>
        </>
    );
};

export default CreateUser;
