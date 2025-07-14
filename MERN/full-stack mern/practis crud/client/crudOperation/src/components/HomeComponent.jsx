// import axios from "axios"
// import { useEffect, useState } from "react"
// import { Link } from 'react-router-dom';



// const ProductList = () => {
//     const [product, setProduct] = useState([])

//     useEffect(() => {
//         axios.get("http://localhost:8000/api/products")
//             .then(res => {
//                 setProduct(res.data)
//             })
//             .catch(err => {
//                 console.error("error fetching product", err);
//             })
//     }, []);

//     return (
//         <>
//             <div>
//                     <h1>Product List</h1>
//                 <ul>
//                     {product.map((item) => (
//                         < li key={item._id} >
//                             <Link to={`/product/${item._id}`}>{item.title}</Link>
//                         </li>
//                     ))}
//                 </ul>
//             </div >
//         </>
//     )
// }
// export default ProductList;