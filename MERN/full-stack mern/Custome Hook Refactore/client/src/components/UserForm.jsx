import React, { useState } from "react";
import UseUserForm from "./UseUserForm";



const UserForm = ({ initialData, onSubmitProps }) => {
    const { formData, errors, touched, handleTouched, handleChange, handleSubmit } =
        UseUserForm(initialData, onSubmitProps);


    return (
        <form onSubmit={handleSubmit} className="card">
            <div>
                <h5 style={{color:"white"}}>User Name:</h5>                        

                <input
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    onBlur={handleTouched}
                    className="input-style"
                />
                {touched.username && errors.username && (
                    <p className="error-style">{errors.username}</p>
                )}
            </div>

            <div>
                <h5 style={{color:"white"}}>Email</h5>                        

                <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleTouched}
                    className="input-style"
                />
                {touched.email && errors.email && (
                    <p className="error-style">{errors.email}</p>
                )}
            </div>
            <div>
                <h5 style={{color:"white"}}>Gender</h5>                        
                <label className="label">Male:</label>
                <input type="checkbox" value={"Male"} />
                <label className="label">Female:</label>
                <input type="checkbox" value={"Female"} />
                <label className="label">Prefare not to say:</label>
                <input type="checkbox" value={"Prefare not to say"} />

                {touched.gender && errors.gender && (
                    <p className="error-style">{errors.gender}</p>
                )}

            </div>
            <div>
                <h5 style={{color:"white"}}>Details</h5>                        
                <input
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    onBlur={handleTouched}
                    className="input-style"
                />
                {touched.details && errors.details && (
                    <p className="error-style">{errors.details}</p>
                )}
            </div>

            <button type="submit" className="submit-button">Submit </button>
        </form>
    );
};

export default UserForm;
