import axios from "axios";
import ProductForm from "./ProductForm";

const CreateProduct = () => {
    const handelCreate = (FormData, setErrors, resetForm) => {
        axios.post("http://localhost:8000/api/product", FormData)
            .then((res) => {
                console.log("✅ Product created:", res.data);
                resetForm({ title: "", price: "", description: "" }); // reset form after success
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
    };

    return(
        <>
        <ProductForm
      initialData={{ title: "", price: "", description: "" }} onSubmitProps={handelCreate}/>
        </>
    )
}
export default CreateProduct;