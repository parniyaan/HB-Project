"use client"

import Link from 'next/link';
import Image from 'next/image';
import styles from './navbar.module.scss';
import logo from "../../../images/Asset 1.png";
import React from 'react';
import { useCars } from '../../../context/context.jsx';
import AddHomeIcon from '@mui/icons-material/AddHome';
import InfoIcon from '@mui/icons-material/Info';
import NotesIcon from '@mui/icons-material/Notes';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import CategoryIcon from '@mui/icons-material/Category';

function Navbar() {
    const { burgerMenu } = useCars();

    return (
        <nav className={`${styles.navbar} ${burgerMenu ? "" : styles.appeared}`}>
            <Image src={logo} alt="logo" className={styles.logo} width={50} height={50} />
            <ul className={styles.list}>
                <li className={styles.listItems}>
                    <Link href="/#footer" className={styles.listItem}>تماس با ما</Link>
                    <AddIcCallIcon className={styles.menuIcons} />
                </li>
                <li className={styles.listItems}>
                    <Link href="/#aboutUs" className={styles.listItem}>درباره ی ما</Link>
                    <InfoIcon className={styles.menuIcons} />
                </li>
                <li className={styles.listItems}>
                    <Link href="/#blog" className={styles.listItem}>بلاگ</Link>
                    <NotesIcon className={styles.menuIcons} />
                </li>
                <li className={styles.listItems}>
                    <Link href="/#product" className={styles.listItem}>محصولات</Link>
                    <CategoryIcon className={styles.menuIcons} />
                </li>
                <li className={styles.listItems}>
                    <Link href="/" className={styles.listItem}>صفحه اصلی</Link>
                    <AddHomeIcon className={styles.menuIcons} />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
