import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ProductForm from "./ProductForm";

const UpdateProduc = () => {
    const {id}= useParams();
    const navigate = useNavigate();
    const [initialData, setInitialData]=useState(null);

    useEffect (()=>{
        axios.get('http://localhost:8000/api/product/${id}')
        .then(res=> setInitialData(res.data))
        .catch(err=> console.error("fetch error",err));
    },[id])
}