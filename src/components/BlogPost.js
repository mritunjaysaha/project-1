import styles from "../../styles/blog.module.scss";

import Link from "next/link";

export const BlogPost = ({ sn, link, title, summary, img, slug }) => {
    return (
        <Link href={`blogs/${slug || link}`} passHref>
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
    );
};
