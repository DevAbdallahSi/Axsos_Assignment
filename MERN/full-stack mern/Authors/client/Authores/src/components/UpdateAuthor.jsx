import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthorForm from "./AutherForm";

const UpdateAuthor = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authore/${id}`)
            .then(res => setInitialData(res.data))
            .catch(err => console.error("Fetch error:", err));
    }, [id]);
    const handelUpdate = (formData, setErrors) => {
        axios.patch(`http://localhost:8000/api/authore/${id}`, formData)
            .then((res) => {
                console.log("✅ Product updated:", res.data);
                navigate(`/`)
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
    }
    return (
        <>
            <h2>Edit this Authore</h2>
            {initialData ? (
                <AuthorForm initialData={initialData} onSubmitProps={handelUpdate}/>
            ):(<p>Loading...</p>)}
        </>
    )
}
export default UpdateAuthor;