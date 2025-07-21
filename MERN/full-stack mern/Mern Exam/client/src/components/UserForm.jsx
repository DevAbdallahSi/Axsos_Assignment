import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserForm = ({ initialData, onSubmitProps }) => {
    const [formData, setFormData] = useState(initialData);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    useEffect(() => {
        setFormData(initialData);
    }, [initialData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validatForm = () => {
        const formErrors = {};
        if (!formData.username.trim()) {
            formErrors.username = "username is required";
        }
        if (!formData.email.trim()) {
            formErrors.email = "email is required";
        }
        // if (!formData.gender.trim()) {
        //     formErrors.gender = "gender is required";
        // }
        if (!formData.details.trim()) {
            formErrors.details = "details is required";
        }

        return formErrors;
    };


    const [selectedValue, setSelectedValue] = useState("Male");

    const handleRadioChange = (
        value
    ) => {
        setSelectedValue(value);
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        const clientErrors = validatForm();
        if (Object.keys(clientErrors).length > 0) {
            setErrors(clientErrors);
            return;
        }
        onSubmitProps(formData, setErrors, setFormData);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="card">
                <div>
                    <h5 style={{ color: "white" }}>User Name:</h5>

                    <input
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="input-style"
                    />
                    {errors.username && (
                        <p className="error-style">{errors.username}</p>
                    )}
                </div>

                <div>
                    <h5 style={{ color: "white" }}>Email</h5>

                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input-style"
                    />
                    {errors.email && (
                        <p className="error-style">{errors.email}</p>
                    )}
                </div>
                <div>
                    <h5 style={{ color: "white" }}>Gender</h5>
                    <label><input type="radio" value="{Male}" checked={selectedValue ==="Male"}onChange={() =>handleRadioChange("Male")}/> Male</label>
                    <label><input type="radio" value="femail" checked={selectedValue ==="femail"}onChange={() =>handleRadioChange("femail")}/>Female</label>
                    <label><input type="radio" value="not to say" checked={selectedValue ==="not to say"}onChange={() =>handleRadioChange("not to say")}/>not to say </label>
                        {errors.gender && (
                            <p className="error-style">{errors.gender}</p>
                        )}

                </div>
                <div>
                    <h5 style={{ color: "white" }}>Details</h5>
                    <input
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        className="input-style"
                    />
                    {errors.details && (
                        <p className="error-style">{errors.details}</p>
                    )}
                </div>

                <button type="submit" className="submit-button">Submit </button>
            </form>
        </>
    )
}
export default UserForm;