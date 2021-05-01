import styles from "../styles/header.module.scss";
import { Navbar } from "./navbar";

export function Header() {
    return (
        <header className={styles.initialPage}>
            {/* <Navbar /> */}

            <h3>Advisory Services for Growing Companies</h3>
        </header>
    );
}
