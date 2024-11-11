'use client'

import React from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import styles from './footer.module.scss';

function Footer() {
    const position = [35.633931, 50.968348];

    return (
        <div className={styles.footerContainer} id="footer">
            <MapContainer center={position} zoom={13} className={styles.map}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position} />
            </MapContainer>

            <div className={styles.information} dir="rtl">
                <ul className={styles.informationList}>
                    <li className={styles.informationHeader}>منوی سایت</li>
                    <li className={styles.informationItems}>صفحه ی اصلی</li>
                    <li className={styles.informationItems}>محصولات</li>
                    <li className={styles.informationItems}>درباره ی ما</li>
                    <li className={styles.informationItems}>تماس با ما</li>
                </ul>
                <ul className={styles.informationList}>
                    <li className={styles.informationHeader}>محصولات</li>
                    <li className={styles.informationItems}>سوپرلید</li>
                    <li className={styles.informationItems}>باکس</li>
                    <li className={styles.informationItems}>گارد عقب جلو</li>
                    <li className={styles.informationItems}>بکسل بند</li>
                    <li className={styles.informationItems}>گوشواره کمک فنر</li>
                    <li className={styles.informationItems}>باربند سقفی</li>
                    <li className={styles.informationItems}>رول بال</li>
                    <li className={styles.informationItems}>لاینر(کفی عقب)</li>
                    <li className={styles.informationItems}>سپر اسپورت</li>
                    <li className={styles.informationItems}>انواع پرژکتورها</li>
                </ul>
                <ul className={styles.informationList}>
                    <li className={styles.informationHeader}>تماس با ما</li>
                    <li className={styles.informationItems} style={{ marginBottom: "15px" }}>
                        آدرس: ملارد، قشلاق، ویلادشت، خیابان پرچم، کوچه سوم
                    </li>
                    <li className={styles.informationItems}>تلفن: 09961610863 - 09922571679</li>
                    <li className={styles.informationItems}>ایمیل: offroadhb@gmail.com</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
