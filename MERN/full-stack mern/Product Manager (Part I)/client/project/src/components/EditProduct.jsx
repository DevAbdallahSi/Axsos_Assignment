import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        price: "",
        description: "",
    });


    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                setFormData(res.data);
            })
            .catch((err) => console.error("Error loading product", err));
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .patch(`http://localhost:8000/api/product/${id}`, formData)
            .then((res) => {
                console.log("Product updated", res.data);
                navigate("/"); // redirect to home or product list
            })
            .catch((err) => {
                if (err.response?.data?.errors) {
                    const errorMessages = Object.values(err.response.data.errors).map(
                        (e) => e.message
                    );
                    alert("Errors:\n" + errorMessages.join("\n"));
                } else {
                    console.log(err);
                }
            });
    };
    return (
        <div className="container-fluid bg-light">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-8 col-sm-10">
                    <form className="form-container" onSubmit={handleSubmit}>
                        <h4 className="text-center font-weight-bold">Update Product</h4>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Title"
                            />
                            <label>Title</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="number"
                                className="form-control"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="Price"
                            />
                            <label>Price</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Description"
                            />
                            <label>Description</label>
                        </div>

                        <div className="form-group">
                            <button className="btn btn-warning btn-block">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};



export default Update;