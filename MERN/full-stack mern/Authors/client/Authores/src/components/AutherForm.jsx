import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthorForm = ({ initialData = { name: "" }, onSubmitProps }) => {
    const [formData, setFormData] = useState({ name: initialData.name || "" });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const isEdit = !!initialData.name;

    useEffect(() => {
        setFormData({ name: initialData.name || "" });
    }, [initialData.name]);

    const handelChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validatForm = () => {
        const formErrors = {};
        if (!formData.name.trim()) {
            formErrors.name = "Name is required";
        } else if (formData.name.trim().length < 3) {
            formErrors.name = "Name must be at least 3 characters";
        }
        return formErrors;
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        const clientErrors = validatForm();
        if (Object.keys(clientErrors).length > 0) {
            setErrors(clientErrors);
            return;
        }
        onSubmitProps(formData, setErrors, setFormData);
    };


    return (
        <form onSubmit={handelSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handelChange}
                />
                {errors.name && <div className="text-danger">{errors.name}</div>}
            </label>

            <div className="mt-3">
                <button type="submit" className="btn btn-primary">
                    {isEdit ? "Update" : "Create"}
                </button>
                <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={() => navigate("/")}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default AuthorForm;
