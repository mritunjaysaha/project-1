import styles from "../styles/blogSection.module.scss";
import Link from "next/link";

const BlogPost = ({ sn, id, title, summary, img, slug }) => {
    console.log({ slug });
    return (
        <Link href={`blog/${slug}`} passHref>
            <a className={styles.cardsContentsContainer}>
                {/* <figure>
                    <img variant="top" src={img} alt={title} />
                </figure> */}
                <article>
                    <li key={title}>
                        <h3>{title}</h3>
                    </li>
                    {/* <div>
                        <p className={styles.pEllipsis}>{summary}</p>
                    </div> */}
                </article>
            </a>
        </Link>
    );
};

export default BlogPost;
