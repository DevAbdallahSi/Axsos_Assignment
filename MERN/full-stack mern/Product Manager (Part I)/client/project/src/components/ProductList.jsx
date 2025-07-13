import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {

    const [product, setProduct] = useState([])
    useEffect(() => {

        axios.get("http://localhost:8000/api/products")
            .then((res) => setProduct(res.data))
            .catch(err => console.error(err))
    }, [])


    return (
        <div>
            <ul>
                {product.map((productItem) => (
                    <li key={productItem._id}>
                        <Link to={`/product/${productItem._id}`}>
                            {productItem.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList;