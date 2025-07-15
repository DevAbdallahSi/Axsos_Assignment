import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';



const ProductList = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProduct(res.data)
            })
            .catch(err => {
                console.error("error fetching product", err);
            })
    }, []);

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="card shadow">
                    <div className="card-body">
                        <h1 className="card-title text-center mb-4">Product List</h1>
                        <ul className="list-group">
                            {product.map((item) => (
                                <li key={item._id} className="list-group-item d-flex justify-content-between align-items-center">
                                    <Link to={`/product/${item._id}`} className="text-decoration-none fw-semibold">
                                        {item.title}
                                    </Link>
                                    {/* <Link to={`/product/edit/${item._id}`} className="btn btn-sm btn-outline-primary">
                                        Edit
                                    </Link> */}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}
export default ProductList;