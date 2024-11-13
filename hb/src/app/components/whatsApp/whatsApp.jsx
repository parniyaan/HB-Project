'use client'

import whatsApp from "../../images/WhatsApp-Logo.wine.svg";
import React from 'react';
import Image from "next/image";

function WhatsApp() {

    const style = {
        width: '150px',
        height:'150px',
        position: 'fixed',
        right: '1%',
        bottom: '40%',
        textDecoration: 'none',
        zIndex: 20,
    };

    const imgStyle = {
        width: '100%',
    };

    return (
            <a href="https://wa.me/+989961610863" style={style}>
                <Image src={whatsApp} alt="WhatsApp" style={imgStyle}/>
            </a>
    );
}

export default WhatsApp;
