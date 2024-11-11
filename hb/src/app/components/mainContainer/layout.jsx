import AboutUs from "./aboutUs/aboutUs.jsx";
import styles from "./layout.module.scss";
import Services from "./services/services.jsx";
import React from 'react';
import Products from "./products/products.jsx";
import ProductDetails from "./products/[slug]/page.jsx";
import Blog from "@/app/components/mainContainer/blog/blog";


function Layout() {

    return (
        <div className={styles.mainContainer}>
            <AboutUs/>
            <Products/>
            <Services/>
            <Blog/>
            {/*<ProductDetails/>*/}
        </div>
    )
}

export default Layout;