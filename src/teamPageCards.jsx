import styles from "../styles/teamPageCards.module.scss";

export function TeamPageCards() {
    return (
        <li className={styles.teamPageCards}>
            <div className={styles.placeholder}></div>
            <div className={styles.nameDesignation}>
                <h3>name</h3>
                <p>designation</p>
            </div>
            <a href="">in</a>
        </li>
    );
}
