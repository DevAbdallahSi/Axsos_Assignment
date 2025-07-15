import { useEffect, useState } from "react"



const ProductForm = ({ initialData, onSubmitProps }) => {
    const [formData, setFormData] = useState(initialData);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setFormData(initialData);
    }, [initialData]);

    const handelChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.title.trim()) newErrors.title = "Title is required";
        if (!formData.price || formData.price < 0) newErrors.price = "Price must be positive";
        if (!formData.description.trim()) newErrors.description = "Description is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const clientErrors = validateForm();
        if (Object.keys(clientErrors).length > 0) {
            setErrors(clientErrors);
            return;
        }
        onSubmitProps(formData, setErrors, setFormData)
    }

    return (
        <form className="p-4 shadow bg-white rounded" onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
            <h3 className="text-center mb-4">{initialData ? "Edit Product" : "Create Product"}</h3>

            <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" name="title" value={formData.title} onChange={handelChange} className="form-control" />
                {errors.title && <div className="text-danger">{errors.title}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Price</label>
                <input type="number" name="price" value={formData.price} onChange={handelChange} className="form-control" />
                {errors.price && <div className="text-danger">{errors.price}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Description</label>
                <input type="text" name="description" value={formData.description} onChange={handelChange} className="form-control" />
                {errors.description && <div className="text-danger">{errors.description}</div>}
            </div>

            <button className="btn btn-primary w-100">{initialData ? "Update" : "Create"}</button>
        </form>
    );
};

export default ProductForm;