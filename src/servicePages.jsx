import styles from "../styles/servicePages.module.scss";

export function ServicePage({ name, data, imgSrc }) {
    return (
        <section className={styles.serviceSection}>
            <article className={styles.contentArticle}>
                <h3>{name}</h3>
                <div className={styles.horizontalBorder}></div>
                <article>
                    {data.map((data) => {
                        return <p>{data}</p>;
                    })}
                </article>
            </article>
            <img src={imgSrc} alt={name} />
        </section>
    );
}
