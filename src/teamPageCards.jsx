import styles from "../styles/teamPageCards.module.scss";
import { UilLinkedinAlt } from "@iconscout/react-unicons";
import Fade from "react-reveal";

export function TeamPageCards({ name, designation, img, href }) {
    return (
        <Fade bottom duration={800}>
            <li className={styles.teamPageCards} key={name}>
                <div>
                    <div className={styles.avatarImage}>
                        <img src={img} alt={name} />
                    </div>
                    <div className={styles.nameDesignation}>
                        <h3>{name ? name : "name"}</h3>
                        <p>{designation ? designation : "designation"}</p>
                    </div>
                </div>
                <a rel="noopener" target="_blank" href={href ? href : "#"}>
                    <UilLinkedinAlt />
                </a>
            </li>
        </Fade>
    );
}
