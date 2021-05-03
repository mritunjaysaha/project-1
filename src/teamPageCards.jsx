import styles from "../styles/teamPageCards.module.scss";
import { ImageAvatars } from "./imageAvatars";
import { UilLinkedinAlt } from "@iconscout/react-unicons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function TeamPageCards({ name, img }) {
    return (
        <li className={styles.teamPageCards}>
            <div className={styles.avatarName}>
                <div>
                    <ImageAvatars name={name} img={img} />
                </div>
                <div className={styles.nameDesignation}>
                    <h3>name</h3>
                    <p>designation</p>
                </div>
            </div>
            <a target="_blank" href="#">
                <UilLinkedinAlt />
            </a>
        </li>
    );
}
