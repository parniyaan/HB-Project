import styles from "./page.module.css";
import Layout from "@/app/components/mainContainer/layout";

export default function Home() {
    return (
        <div className={styles.page}>
            <Layout/>
        </div>
    );
}
