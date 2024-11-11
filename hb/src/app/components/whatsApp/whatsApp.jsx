import whatsApp from "../../images/WhatsApp-Logo.wine.svg";
import React from 'react';
import Image from "next/image";

function WhatsApp() {

    const style = {
        width: '130px',
        height:'130px',
        position: 'fixed',
        right: '1%',
        bottom: '0',
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
