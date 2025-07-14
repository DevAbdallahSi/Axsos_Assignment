// import { useState } from "react";
// import axios from "axios";

// const ProductForm  = ({ initialData, onSubmitProp }) => {
//     const [formData, setFormData] = useState(initialData || { title: "", price: "", description: "" });
//     const [errors, setErrors] = useState({})
//     const handelChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value })
//     };
//     const validateForm = () => {
//         const newErrors = {};
//         if (!formData.title.trim()) newErrors.title = "Ttle is required"
//         if (!formData.price || formData.price < 0) newErrors.price = "Price must be a positive number"
//         if (!formData.description.trim()) newErrors.description = "description is required"
//         return newErrors
//     }

//     const createProduct = (e) => {
//         e.preventDefault();
//         const clientErrors = validateForm();
//         if (Object.keys(clientErrors).length > 0) {
//             setErrors(clientErrors);
//             return;
//         }
//         axios.post("http://localhost:8000/api/product", formData)
//             .then((res) => {
//                 console.log("success:", res.data);
//             })
//             .then(setFormData({
//                 title:"",price:"",description:""
//             }))
//             .catch(err => {
//                 if (err.response?.data?.errors) {
//                     const fieldErrors = {};
//                     for (let key in err.response.data.errors) {
//                         fieldErrors[key] = err.response.data.errors[key].message;
//                     }
//                     setErrors(fieldErrors); // 🎯 update the UI errors
//                 } else {
//                     console.error("❌ Server error:", err);
//                 }
//             });
//     }

//     return (
//         <>
//             <form style={{display:"grid"}} onSubmit={createProduct} >
//                 <div>
//                     <label>title:
//                         <input type="text" value={formData.title} name="title" onChange={handelChange} />
//                         {errors.title && <span style={{ color: 'red' }}>{errors.title}</span>}
//                     </label>
//                 </div>
//                 <div>
//                     <label>price:
//                         <input type="text" value={formData.price} name="price" onChange={handelChange} />
//                         {errors.price && <span style={{ color: 'red' }}>{errors.price}</span>}
//                     </label>
//                 </div>
//                 <div>
//                     <label>description:
//                         <input type="text" value={formData.description} name="description" onChange={handelChange} />
//                         {errors.description && <span style={{ color: 'red' }}>{errors.description}</span>}
//                     </label>
//                 </div>
//                 <button className="btn btn-primary btn-block">Create</button>
//             </form>
//         </>
//     )
// }
// export default ProductForm;