import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ProductForm from "./ProductForm";

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => setInitialData(res.data))
            .catch(err => console.error("Fetch error:", err));
    }, [id]);

    const handleUpdate = (formData, setErrors) => {
        axios.patch(`http://localhost:8000/api/product/${id}`, formData)
            .then((res) => {
                console.log("✅ Product updated:", res.data);
                navigate(`/product/${id}`); // go to product details page
            })
            .catch((err) => {
                if (err.response?.data?.errors) {
                    const fieldErrors = {};
                    for (let key in err.response.data.errors) {
                        fieldErrors[key] = err.response.data.errors[key].message;
                    }
                    setErrors(fieldErrors);
                } else {
                    console.error("❌ Update error:", err);
                }
            });
    };

    return (
        <>
            <h2>Edit Product</h2>
            {initialData ? (
                <ProductForm
                    initialData={initialData}
                    onSubmitProps={handleUpdate}
                />
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default UpdateProduct;
