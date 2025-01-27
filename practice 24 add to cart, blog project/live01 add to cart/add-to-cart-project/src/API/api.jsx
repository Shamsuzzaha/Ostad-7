import axios from "axios";

// Products List for home page
export const productList = async () => {
    let URL = 'https://cart-api.teamrabbil.com/api/product-list';
    try {
        let res = await axios.get(URL);
        let json = res.data;
        return json.data; // Add a return statement to return the data
    } catch (error) {
        console.error("Error fetching product list:", error);
        throw error; // Optionally re-throw the error
    }
};


// Login api
export const login = async (UserEmail) => {
    let URL = "https://cart-api.teamrabbil.com/api/user-login"
    let res = await axios.post(URL, {UserEmail: UserEmail});
    let json = res.data;
    return json.data;
}


// User verify
export const verify = async (UserEmail,OTP) => {
    let URL = 'https://cart-api.teamrabbil.com/api/verify-login'
    let res = await axios.post(URL, {
        UserEmail: UserEmail,
        OTP: OTP
    });
    let json = res.data;
    return json.data;
}


export const cartList = async () => {
    let URL = "https://cart-api.teamrabbil.com/api/cart-list"
    const headers = {
        'token': sessionStorage.getItem('token'),
    }
    let res = await axios.get(URL,{headers});
    let json = res.data;
    return json.data;
}



export const createListApi = async (id) => {
    const URL = `https://cart-api.teamrabbil.com/api/create-cart/${id}`;
    const headers = {
        'token': sessionStorage.getItem('token'), // Ensure token exists in sessionStorage
    };

    try {
        // Make the GET request with headers
        const res = await axios.get(URL, { headers });

        // Extract the response JSON
        const json = res.data;

        // Return the 'data' property
        return json.data;
    } catch (error) {
        // Handle any errors
        console.error("Error creating list:", error);
        throw error; // Optional: rethrow the error for further handling
    }
};


export const deleteCartItem = async (id) => {
    const URL = `https://cart-api.teamrabbil.com/api/remove-cart/${id}`;
    const headers = {
        'token': sessionStorage.getItem('token'), // Ensure token exists in sessionStorage
    };
    try {
        const res = await axios.get(URL,{headers}); // Use DELETE instead of GET
        const json = res.data;
        return json.msg;
    } catch (error) {
        console.error("Error deleting cart item:", error);
        throw error; // Re-throw the error to handle it in the calling function
    }
};