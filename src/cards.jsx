import styles from "../styles/cards.module.scss";
import { MUIButton } from "./atoms/button";

export function Cards({ text, className }) {
    console.log({ className });
    return (
        <li className={`${styles.offeringCards} ${styles.cardOuter}`}>
            <div className={styles.pGroup}>
                <p>debt</p>
                <p>insurance</p>
            </div>
            <MUIButton />
        </li>
    );
}
