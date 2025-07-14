import { useEffect, useState } from "react"



const ProductForm = ({ initialData, onSubmitProps }) => {
    const [formData, setFormData] = useState(initialData);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setFormData(initialData);
    }, [initialData]);

    handelChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const newError = {};
        if (!formData.title.trim()) newErrors.title = "Title is required";
        if (!formData.price || formData.price < 0) newErrors.price = "Price must be positive";
        if (!formData.description.trim()) newErrors.description = "Description is required";
        return newErrors;
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        const clientErrors = validateForm();
        if (Object.keys(clientErrors).length > 0) {
            setErrors(clientErrors);
            return;
        }
        onSubmitProps(formData, setErrors, setFormData)
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
            <div>
                <label>Title:</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} />
                {errors.title && <span style={{ color: "red" }}>{errors.title}</span>}
            </div>

            <div>
                <label>Price:</label>
                <input type="number" name="price" value={formData.price} onChange={handleChange} />
                {errors.price && <span style={{ color: "red" }}>{errors.price}</span>}
            </div>

            <div>
                <label>Description:</label>
                <input type="text" name="description" value={formData.description} onChange={handleChange} />
                {errors.description && <span style={{ color: "red" }}>{errors.description}</span>}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default ProductForm;