// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"



// const Details = () => {
//     const [product, setProduct] = useState({});
//     const { id } = useParams();


//     useEffect(() => {
//         axios.get('http://localhost:8000/api/product/' + id)
//             .then(res => setProduct(res.data))
//             .catch(err => console.error("Error fetching product:", err));
//     }, [id]);
//                     console.log(product )
//     if (!product) return <p>loading...</p>

//     return (
//         <>
//             <div>
//                 <p>Title: {product.title}</p>
//                 <p>Price: {product.price}</p>
//                 <p>Description: {product.description}</p>
//             </div>
//         </>
//     )
// }
// export default Details;