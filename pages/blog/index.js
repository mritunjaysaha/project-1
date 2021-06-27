import { BlogSection } from "../../src/blogs/blogSection";
import styles from "../../styles/blogPages.module.scss";
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
                {/* <BlogSection /> */}

                {posts.map((frontMatter) => (
                    <BlogPost {...frontMatter} />
                ))}
            </section>
        </>
    );
}

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter("blog");

    return { props: { posts } };
}
