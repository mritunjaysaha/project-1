import styles from "../styles/header.module.scss";
import { Navbar } from "../src/navbar";

export function Header() {
    return (
        <header className={styles.initialPage}>
            <h3>Advisory Services for Growing Companies</h3>
        </header>
    );
}
