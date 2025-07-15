import axios from "axios";
import AuthorForm from "./AutherForm";
import { Link } from "react-router-dom";

const CreateAuthor = () => {
    const handelCreate = (formData, setErrors, resetForm) => {
        axios.post("http://localhost:8000/api/authore", formData)
            .then((res) => {
                console.log("✅ Product created:", res.data);
                resetForm({ name: "" })
            })
            .catch((err) => {
                if (err.response?.data?.errors) {
                    const fieldErrors = {};
                    for (let key in err.response.data.errors) {
                        fieldErrors[key] = err.response.data.errors[key].message;
                    }
                    setErrors(fieldErrors);
                } else {
                    console.error("❌ Server error:", err);
                }
            });
    }

    return (
        <>
            <Link to={`/`} className="btn btn-warning btn-sm me-2">Home</Link>
            <AuthorForm
                initialData={{ name: "" }}
                onSubmitProps={handelCreate}
            />
        </>
    )
}
export default CreateAuthor;