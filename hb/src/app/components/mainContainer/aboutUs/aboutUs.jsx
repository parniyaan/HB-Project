import styles from "./aboutUs.module.scss";
import logo from "../../../images/Asset 1.png";
import React from 'react';
import Image from "next/image";

function AboutUs() {

    return (
        <div
            className={styles.aboutUsContainer}
            id="aboutUs"
        >
            <h3 className={styles.aboutUsTitle} dir="rtl">درباره ی ما</h3>
            <div  className={styles.aboutUs}>
                <Image src={logo} alt="logo" className={styles.logo}/>
                <p className={styles.aboutUsDes} dir="rtl">
                    با بیش از 30 سال تجربه در زمینه تجهیزات آفرود، کمپانی ما به ارائه محصولات و خدماتی با کیفیت بالا
                    متعهد است. ما از بهترین و باکیفیت‌ترین مواد در تولیدات خود استفاده می‌کنیم تا نیازهای مشتریان را به
                    بهترین شکل ممکن برآورده کنیم. ما به نوآوری و بهبود مداوم افتخار می‌کنیم و هدف‌مان ایجاد خاطراتی
                    فراموش‌نشدنی برای شما در سفرهای خارج از جاده است. با ما، به دنیای جدیدی از ماجراجویی‌ها وارد شوید و
                    از
                    هر لحظه لذت ببرید.
                </p>

            </div>
        </div>
    );
}

export default AboutUs;
