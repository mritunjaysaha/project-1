import styles from "../../styles/blog.module.scss";

import { getAllFilesFrontMatter } from "../../src/lib/mdx";
import { BlogPost } from "../../src/components/BlogPost";

export default function Blog({ posts }) {
    return (
        <>
            <section className={styles.blogPages}>
                <h1>
                    Our Blogs
                    <div
                        className={`${styles.horizontalBorder} ${styles.backgroundBlack}`}
                    ></div>
                </h1>
                <section className={styles.blogCardsContainer}>
                    {posts.map((frontMatter) => {
                        return <BlogPost {...frontMatter} />;
                    })}
                </section>
            </section>
        </>
    );
}

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter("blogs");

    return { props: { posts } };
}
