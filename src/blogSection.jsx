import styles from "../styles/blogSection.module.scss";
import { blogData } from "../blogsData";
import { Anchor } from "./atoms/anchor";
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
            <div className={styles.cardsContentsContainer}>
                <img variant="top" src={img} alt={title} />
                <div>
                    <li key={title}>
                        <h3>
                            {title
                                ? title
                                : `Card title that wraps to a new line`}
                        </h3>
                    </li>
                    <p>
                        <p className={styles.pEllipsis}>
                            {summary ? summary : `summary goes here`}
                        </p>
                    </p>
                </div>
            </div>
        </Fade>
    );
}

export function BlogSection() {
    const { data } = blogData;

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
