import styles from "../styles/teamPageCards.module.scss";

export function TeamPageCards() {
    return (
        <li className={styles.teamPageCards}>
            <div className={styles.placeholder}></div>
            <h5>name</h5>
            <p>designation</p>
            <a href="">in</a>
        </li>
    );
}
