import styles from "../../styles/blog.module.scss";

import { getAllFilesFrontMatter } from "../../lib/mdx";
import BlogPost from "../../components/BlogPost";

export default function Blog({ posts }) {
    console.log({ posts });

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
                        console.log({ frontMatter });
                        return <BlogPost {...frontMatter} />;
                    })}
                </section>
            </section>
        </>
    );
}

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter("blog");

    return { props: { posts } };
}
