import styles from "../styles/cards.module.scss";
import { MUIButton } from "./atoms/button";

export function Cards({ text }) {
    return (
        <li className={styles.cardOuter}>
            <div className={styles.pGroup}>
                <p>debt</p>
                <p>insurance</p>
            </div>
            <MUIButton />
        </li>
    );
}
