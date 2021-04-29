import styles from "../styles/cards.module.scss";
import { MUIButton } from "./atoms/button";

export function Cards({ text, className }) {
    console.log({ className });
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
                <p>debt</p>
                <p>insurance</p>
            </div>
            <MUIButton />
        </li>
    );
}
