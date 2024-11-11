'use client';

import React, { useState, useEffect } from 'react';
import { useCars } from '../../../../context/context';
import styles from './page.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

function ProductDetails({ params }) {
    const [menuSelected, setMenuSelected] = useState(false);
    const { carData } = useCars();


    console.log(params)
    // if (!params || !params.slug) {
    //     return <div>Error: No slug provided</div>;
    // }
    //
    // const { slug } = params;

    const selectedCar = carData.find(car => car.slug === params);

    if (!selectedCar) {
        return <div>Car not found</div>;
    }

    function openMenuHandler() {
        setMenuSelected(!menuSelected);
    }

    return (
        <div
            className={styles.product}
            style={{ backgroundImage: `url(${selectedCar.src})` }}
            dir="rtl"
        >
            <div className={styles.content}>
                <h1 className={styles.carName}>{selectedCar.name}</h1>
                <div className={styles.information}>
                    <Carousel className={styles.slider}>
                        <img src={selectedCar.image1} alt="car" className={styles.image} />
                        <img src={selectedCar.image2} alt="car" className={styles.image} />
                        <img src={selectedCar.image3} alt="car" className={styles.image} />
                    </Carousel>
                    <div className={styles.carDescription}>
                        <h1 className={styles.infoTitle}>اطلاعات محصولات</h1>
                        <h3 className={styles.relatedProduct}>
                            محصولات مرتبط{' '}
                            <span className={styles.openIcon}>
                <ArrowDropDownCircleIcon onClick={openMenuHandler} />
              </span>
                        </h3>
                        {menuSelected ? (
                            <ul className={styles.proList}>
                                <li className={styles.proItems}>سوپرلید</li>
                                <li className={styles.proItems}>باکس</li>
                                <li className={styles.proItems}>گارد عقب و جلو</li>
                                <li className={styles.proItems}>بکسل بند</li>
                                <li className={styles.proItems}>گوشواره کمک فنر</li>
                                <li className={styles.proItems}>باربند سقفی</li>
                                <li className={styles.proItems}>رول بال</li>
                                <li className={styles.proItems}>لاینر(کفی عقب)</li>
                                <li className={styles.proItems}>سپر اسپورت</li>
                                <li className={styles.proItems}>انواع پروژکتورها</li>
                            </ul>
                        ) : (
                            <>
                                <div className={styles.carDes}>
                                    <h3 className={styles.carDesTitle}>توضیحات:</h3>
                                    <p className={styles.carDesContent}>{selectedCar.information}</p>
                                </div>
                                <div className={styles.productProperties}>
                                    <h3>مشخصات محصول</h3>
                                    <ul className={styles.productList}>
                                        <li>
                                            <h2>رنگ:</h2>
                                            <h3>دلخواه</h3>
                                        </li>
                                        <li>
                                            <h2>ابعاد:</h2>
                                            <h3>متناسب با خودرو شما</h3>
                                        </li>
                                        <li>
                                            <h2>ضد ضربه:</h2>
                                            <h3>بله</h3>
                                        </li>
                                        <li>
                                            <h2>ضد زنگ زدگی:</h2>
                                            <h3> بله</h3>
                                        </li>
                                        <li>
                                            <h2>جنس:</h2>
                                            <h3>آلیاژ با کیفیت</h3>
                                        </li>
                                        <li>
                                            <h2>وزن:</h2>
                                            <h3>سبک و قابل حمل</h3>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
