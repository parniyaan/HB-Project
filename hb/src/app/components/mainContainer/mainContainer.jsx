import React from 'react';
import AboutUs from "@/app/components/mainContainer/aboutUs/aboutUs";
import Products from "@/app/components/mainContainer/products/products";
import Services from "@/app/components/mainContainer/services/services";
import Blog from "@/app/components/mainContainer/blog/frequentlyQuestions";
import ProductDetails from "@/app/components/mainContainer/products/productDetails/productDetails";

function MainContainer() {
    return (
        <div>
            <AboutUs/>
            <Products/>
            <Services/>
            <Blog/>
            <ProductDetails/>
        </div>
    );
}

export default MainContainer;
