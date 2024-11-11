'use client';

import styles from "./header.module.scss";
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useCars } from "../../context/context.jsx";

function Header() {
    const { burgerMenu, setBurgerMenu } = useCars();

    function menuHandler() {
        setBurgerMenu(!burgerMenu);
    }

    return (
        <div className={styles.header}>
            <div>
                {burgerMenu ? (
                    <MenuIcon className={styles.menu} fontSize="large" onClick={menuHandler}/>
                ) : (
                    <CloseIcon className={styles.menu} fontSize="large" onClick={menuHandler}/>
                )}
            </div>
            <div className={styles.des}>
                <h1 dir="rtl" className={styles.slogan}><span
                    style={{color: "var(--primary-color)"}}>ماجراجویی های</span> فراموش
                    نشدنی تان را با ما بسازید <span style={{color: "var(--primary-color)"}}>!</span></h1>
                <h2 dir="rtl" className={styles.description}>
                    کمپانی <span style={{color: "var(--primary-color)"}}>HB</span> با 30 سال تجربه در زمینه تجهیزات
                    آفرود، مفتخر است تا بهترین خدمات را به شما ارائه دهد. ما
                    همراه شما در هر ماجراجویی خواهیم بود.
                </h2>
            </div>
        </div>
    );
}

export default Header;
