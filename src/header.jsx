import styles from "../styles/header.module.scss";
import Fade from "react-reveal/Fade";

export function Header() {
    return (
        <header className={styles.initialPage}>
            <Fade bottom duration={1000}>
                <h3>Advisory Services for Growing Companies</h3>
            </Fade>
        </header>
    );
}
