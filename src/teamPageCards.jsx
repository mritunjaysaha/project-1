import styles from "../styles/teamPageCards.module.scss";
import { ImageAvatars } from "./imageAvatars";

export function TeamPageCards({ name, img }) {
    return (
        <li className={styles.teamPageCards}>
            <ImageAvatars name={name} img={img} />
            <div className={styles.nameDesignation}>
                <h3>name</h3>
                <p>designation</p>
            </div>
            <a href="">in</a>
        </li>
    );
}
