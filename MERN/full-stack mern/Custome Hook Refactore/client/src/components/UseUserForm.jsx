// hooks/usePlayerForm.js
import { useState, useEffect } from "react";

const UseUserForm = (initialData, onSubmitProps) => {
    const [formData, setFormData] = useState(initialData);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setFormData(initialData);
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleTouched = (e) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));

    }

    const validate = () => {
        const newErrors = {};
        if (!formData.username.trim()) newErrors.username = "Name is required";
        if (!formData.email.trim()) newErrors.email = "email is required";
        if (!formData.gender.trim()) newErrors.gender = "gender is required";
        if (!formData.details.trim()) newErrors.details = "details is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            onSubmitProps(formData, setErrors, () => setFormData(initialData));
        } else {
            setErrors(validationErrors);
        }
    };

    return {
        formData,
        errors,
        touched,
        handleTouched,
        handleChange,
        handleSubmit
    };
};

export default UseUserForm;
