import styles from "../styles/servicePages.module.scss";
import { navbarData } from "../data";
import { Anchor } from "../src/atoms/anchor";
import { useRouter } from "next/router";

export function ServicePage({ name, data, imgSrc }) {
    const { services } = navbarData;
    const router = useRouter();

    return (
        <section className={styles.serviceSection}>
            <section className={styles.serviceArticleContainer}>
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
            <section className={styles.serviceSection2}>
                <ul className={styles.menuContainer}>
                    {services.map((data) => (
                        <li
                            className={
                                router.pathname === data.link
                                    ? styles.activeLink
                                    : ""
                            }
                        >
                            <Anchor name={data.name} href={data.link} />
                        </li>
                    ))}
                </ul>

                <article className={styles.articleMid}>
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <div className={styles.horizontalBorder}></div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Debitis ratione possimus cupiditate maiores nihil
                        magni asperiores sed. Incidunt non cum fuga, doloribus
                        in animi, magni possimus molestias, atque numquam totam!
                    </p>
                </article>

                <article className={styles.articleDirector}>
                    <img src="" alt="" />
                    <h3>name</h3>
                    <p>designation</p>

                    <Anchor name={<p>Learn More</p>} />
                </article>
            </section>
        </section>
    );
}
