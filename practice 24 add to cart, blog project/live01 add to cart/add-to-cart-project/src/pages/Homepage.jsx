import React from 'react';
import Layout from "../Layout/Layout.jsx";
import ProductList from "../componants/ProductList.jsx"; // Fixed typo in "components"

const Homepage = () => {
    return (
        <Layout>
            <ProductList />
        </Layout>
    );
};

export default Homepage;
