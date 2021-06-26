import { BlogSection } from "../../src/blogs/blogSection";
import styles from "../../styles/blogPages.module.scss";

export default function Blog() {
    return (
        <>
            <section className={styles.blogPages}>
                <h1>
                    Our Blogs
                    <div
                        className={`${styles.horizontalBorder} ${styles.backgroundBlack}`}
                    ></div>
                </h1>
                <BlogSection />
            </section>
        </>
    );
}
