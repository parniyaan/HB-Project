import styles from "./page.module.css";
import React from "react";
import WhatsApp from "./components/whatsApp/whatsApp";
import RootLayout from "./layout";

export default function Home() {
    return (
        <div className={styles.page}>
            <RootLayout/>
        </div>
    );
}
