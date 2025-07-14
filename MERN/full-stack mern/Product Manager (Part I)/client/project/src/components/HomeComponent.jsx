import React, { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

const HomeComponent = () => {
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        description: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        axios
            .post("http://localhost:8000/api/product", formData)
            .then((res) => { })
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
        <>
            <div className="container-fluid bg-light">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-8 col-sm-10">
                        <form className="form-container" onSubmit={handleSubmit}>
                            <h4 className="text-center font-weight-bold">Create Product</h4>

                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="productTitle"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                />
                                <label htmlFor="floatingInput">Title</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="floatingPrice"
                                    placeholder="price"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                />
                                <label htmlFor="floatingPrice">Price</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingDescription"
                                    placeholder="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                                <label htmlFor="floatingDescription">Description</label>
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary btn-block">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <Link to="/allProducts">Go to all product</Link> */}
        </>
    );
};

export default HomeComponent;   
