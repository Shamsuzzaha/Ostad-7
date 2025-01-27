import React, { useEffect, useState } from "react";
import { createListApi, productList } from "../API/api.jsx";
import { Toaster, toast } from "react-hot-toast";

const ProductList = () => {
    const [products, setProducts] = useState([]); // State to store product data
    const [loading, setLoading] = useState(false); // State to manage loading status

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await productList();
                setProducts(data);
            } catch (error) {
                console.error("Failed to fetch product list:", error);
            }
        };
        fetchProducts();
    }, []);

    // Function to add product to cart (API call)
    const addToCart = async (productId) => {
        setLoading(true);
        try {
            const token = sessionStorage.getItem("token");
            if (!token) {
                // Show login modal if there's no token
                const modal = document.getElementById("loginModal");
                let bootstrapModal = window.bootstrap.Modal.getInstance(modal);
                if (!bootstrapModal) {
                    bootstrapModal = new window.bootstrap.Modal(modal);
                }
                bootstrapModal.show();
            } else {
                await createListApi(productId);
                toast.success("Successfully added to cart!", {
                    position: "top-center",
                    duration: 3000,
                    style: { background: "black", color: "white" },
                });
            }
        } catch (error) {
            toast.error("Failed to add to cart. Please try again.", {
                position: "top-right",
                duration: 3000,
            });
            console.error("Error adding to cart:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <Toaster />
            <h1 className="text-center my-4">Our Products</h1>
            <div className="row">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={product.id}>
                            <div className="card m-3 shadow">
                                <img
                                    className="card-img-top"
                                    src={product.image}
                                    alt={product.title}
                                    style={{ objectFit: "cover", height: "200px" }}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.short_des}</p>
                                    <p>
                                        Price: <b>${product.price}</b>
                                    </p>
                                    <p>
                                        Discount Price: <b>${product.discount_price}</b>
                                    </p>
                                </div>
                                <div className="card-footer text-center">
                                    <button
                                        onClick={() => addToCart(product.id)}
                                        className="btn btn-primary"
                                        disabled={loading}
                                    >
                                        {loading ? "Adding..." : "Add to Cart"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center">
                        <p>Loading...</p>
                    </div>
                )}
            </div>

            {/* Login Modal */}
            <div
                className="modal fade"
                id="loginModal"
                tabIndex="-1"
                aria-labelledby="loginModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loginModalLabel">
                                Login
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            {/* Simulating a login process */}
                            <button
                                className="btn btn-primary w-100"
                                onClick={() => {
                                    sessionStorage.setItem("token", "fake-token"); // Simulate login
                                    const loginModal = window.bootstrap.Modal.getInstance(
                                        document.getElementById("loginModal")
                                    );
                                    loginModal.hide(); // Hide the modal after login

                                    // Check if a product was attempted to be added before login
                                    const productId = sessionStorage.getItem("productId");
                                    if (productId) {
                                        addToCart(productId); // Retry adding to cart
                                        sessionStorage.removeItem("productId"); // Clear after retry
                                    }
                                }}
                            >
                                Complete Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
