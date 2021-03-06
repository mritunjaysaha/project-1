import styles from "../styles/cards.module.scss";
import { Anchor } from "../src/atoms/anchor";
import Fade from "react-reveal";

export function Cards({ text, className, link }) {
    return (
        <Fade bottom duration={800}>
            <li
                key={link}
                className={`${
                    className.toLowerCase() === "offeringcards"
                        ? styles.offeringCards
                        : className.toLowerCase() === "clientelecards"
                        ? styles.clienteleCards
                        : ""
                } ${styles.cardOuter}`}
            >
                <div className={styles.nameArea}>
                    {text ? text.map((t) => <p>{t}</p>) : ""}
                </div>
                {link ? (
                    <div className={styles.linkArea}>
                        <Anchor
                            name="know more"
                            href={link ? `/ourOfferings/${link}` : ""}
                        />
                    </div>
                ) : (
                    ""
                )}
            </li>
        </Fade>
    );
}
