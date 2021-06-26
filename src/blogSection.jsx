import styles from "../styles/blogSection.module.scss";
import { blogData } from "../blogsData";
import Fade from "react-reveal";

function ReadMore() {
    return (
        <p className={styles.readMore}>
            Read More&nbsp;<span>&gt;&gt;&gt;</span>
        </p>
    );
}

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
    const { data } = blogData;

    data.sort(function (a, b) {
        return b.sn - a.sn;
    });

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
