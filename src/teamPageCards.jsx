import styles from "../styles/teamPageCards.module.scss";
import { UilLinkedinAlt } from "@iconscout/react-unicons";

export function TeamPageCards({ name, designation, img, href }) {
    return (
        <li className={styles.teamPageCards}>
            <div>
                <div className={styles.avatarImage}>
                    <img src={img} alt={name} />
                </div>
                <div className={styles.nameDesignation}>
                    <h3>{name ? name : "name"}</h3>
                    <p>{designation ? designation : "designation"}</p>
                </div>
            </div>
            <a target="_blank" href={href ? href : "#"}>
                <UilLinkedinAlt />
            </a>
        </li>
    );
}
