import styles from "../../styles/blogSection.module.scss";
import { blogData } from "../../blogsData";
import Fade from "react-reveal";
import { Anchor } from "../atoms/anchor";
import Link from "next/link";

const { data } = blogData;

data.sort(function (a, b) {
    return b.sn - a.sn;
});

function CardContents({ img, title, summary, id }) {
    return (
        <Fade bottom duration={800}>
            <Link href={`/blogs/${id}`}>
                <a className={styles.cardsContentsContainer}>
                    <figure>
                        <img variant="top" src={img} alt={title} />
                    </figure>
                    <article>
                        <li key={title}>
                            <h3>{title}</h3>
                        </li>
                        <div>
                            <p className={styles.pEllipsis}>{summary}</p>
                        </div>
                    </article>
                </a>
            </Link>
        </Fade>
    );
}

export function BlogSectionForHomePage() {
    const cardsToShow = [];

    for (
        let i = 0;
        (i < data.length && data.length < 5) || (i < 5 && data.length >= 5);
        i++
    ) {
        cardsToShow.push(data[i]);
    }

    return (
        <section className={styles.blogCardsContainer}>
            {cardsToShow.map(({ img, title, summary, id }) => (
                <CardContents
                    img={img}
                    title={title}
                    summary={summary}
                    id={id}
                />
            ))}
        </section>
    );
}

export function BlogSection() {
    return (
        <section className={styles.blogCardsContainer}>
            {data.map(({ img, title, summary, id }) => (
                <CardContents
                    img={img}
                    title={title}
                    summary={summary}
                    id={id}
                />
            ))}
        </section>
    );
}

export function BlogList() {
    return (
        <ul>
            {data.map(({ title, id }) => {
                return (
                    <li key={title}>
                        <Anchor name={title} href={`/blogs/${id}`} />
                    </li>
                );
            })}
        </ul>
    );
}
