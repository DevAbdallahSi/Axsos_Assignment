import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const Details = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error("Error fetching product:", err));
    }, [id]);
    console.log(product)
    if (!product) return <p>loading...</p>

    return (
        <>
            <div>
                <p>Title: {product.title}</p>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
                <Link to={`/product/edit/${product._id}`}>Edit</Link>
                {" | "}
                <DeleteButton
                    productId={product._id}
                    onSuccess={() => {
                        alert("Product deleted successfully!");
                        navigate("/")
                    }}
                />
            </div>
        </>
    )
}
export default Details;