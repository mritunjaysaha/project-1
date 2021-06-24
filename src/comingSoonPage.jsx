import styles from "../styles/comingSoon.module.scss";

export function ComingSoonPage() {
    return (
        <>
            <header className={styles.careersHeader}>
                <h1 className={styles.multiLineHeader}>
                    coming <span className={styles.spanColor}>soon</span>
                </h1>
            </header>
        </>
    );
}
