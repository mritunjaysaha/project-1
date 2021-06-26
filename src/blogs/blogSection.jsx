import styles from "../../styles/blogSection.module.scss";
import { blogData } from "../../blogsData";
import Fade from "react-reveal";
import { Anchor } from "../atoms/anchor";

const { data } = blogData;

data.sort(function (a, b) {
    return b.sn - a.sn;
});

function CardContents({ img, title, summary, id }) {
    return (
        <Fade bottom duration={800}>
            <a className={styles.cardsContentsContainer} href={`/blogs/${id}`}>
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
        </Fade>
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
