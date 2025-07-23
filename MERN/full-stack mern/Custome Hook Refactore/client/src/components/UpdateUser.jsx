// pages/EditPlayer.js
import React, { useEffect, useState } from "react";
import PlayerForm from "./UserForm";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [userToEdit, setUserToEdit] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/${id}`)
            .then(res => setUserToEdit(res.data))
            .catch(err => console.log(err));
    }, [id]);

    const handleUpdate = (formData, setErrors, resetForm) => {
        axios.patch(`http://localhost:8000/api/user/${id}`, formData)
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

    if (!userToEdit) return <p>Loading...</p>;

    return (
        <UserForm
            initialData={userToEdit}
            onSubmitProps={handleUpdate}
        />
    );
};

export default UpdateUser;
