import styles from "../styles/cards.module.scss";
import { MUIButton } from "./atoms/button";

export function Cards({ text, className }) {
    return (
        <li
            className={`${
                className.toLowerCase() === "offeringcards"
                    ? styles.offeringCards
                    : className.toLowerCase() === "clientelecards"
                    ? styles.clienteleCards
                    : ""
            } ${styles.cardOuter}`}
        >
            <div className={styles.pGroup}>
                {text.map((t) => (
                    <p>{t}</p>
                ))}
            </div>
        </li>
    );
}
