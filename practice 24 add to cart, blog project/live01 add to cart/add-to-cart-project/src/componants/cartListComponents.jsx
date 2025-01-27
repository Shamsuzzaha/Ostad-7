import React, { useEffect, useState } from 'react';
import { cartList, deleteCartItem } from "../API/api.jsx"; // Ensure deleteCartItem API function is implemented
import { toast } from "react-hot-toast";

const CartListComponents = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        setLoading(true);
        try {
            const data = await cartList();
            setCartItems(data);

            toast.success("Cart items loaded successfully!", {
                position: "top-center",
                duration: 3000,
                style: { background: "green", color: "white" },
            });
        } catch (error) {
            toast.error("Failed to load cart items. Please try again.", {
                position: "top-center",
                duration: 3000,
                style: { background: "red", color: "white" },
            });
            console.error("Error loading cart list:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (productId) => {
        try {
            // Call the API using the GET method
            await deleteCartItem(productId);

            // Update the state to remove the deleted item
            setCartItems(prevItems => prevItems.filter(item => item['product'].id !== productId));

            toast.success("Item removed from cart successfully!", {
                position: "top-center",
                duration: 3000,
                style: { background: "green", color: "white" },
            });
        } catch (error) {
            toast.error("Failed to remove item from cart. Please try again.", {
                position: "top-center",
                duration: 3000,
                style: { background: "red", color: "white" },
            });
            console.error("Error deleting cart item:", error);
        }
    };


    return (
        <div className="container">
            <h1>Your Cart</h1>
            {loading ? (
                <p>Loading cart items...</p>
            ) : cartItems.length > 0 ? (
                <ul className="list-group">
                    {cartItems.map((item, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <img
                                    src={item['product'].image}
                                    alt={item['product'].title}
                                    style={{ width: "50px", height: "50px", objectFit: "cover", marginRight: "10px" }}
                                />
                                <strong>{item['product'].title}</strong> - ${item['product'].discount_price}


                                <p className="text-muted mb-0">{item['product'].short_des}</p>
                            </div>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(item['product'].id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default CartListComponents;
