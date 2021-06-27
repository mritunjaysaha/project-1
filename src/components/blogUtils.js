import { blogData } from "../../blogData";
import { BlogPost } from "../components/BlogPost";
import { Anchor } from "../atoms/anchor";
import styles from "../../styles/blog.module.scss";

const { data } = blogData;

data.sort((a, z) => {
    return z.sn - a.sn;
});

const mostRecentData = [];

for (
    let i = 0;
    (i < data.length && data.length < 5) || (i < 5 && data.length >= 5);
    i++
) {
    mostRecentData.push(data[i]);
}

export function BlogPostsForHomePage() {
    return (
        <>
            <section className={styles.blogCardsContainer}>
                {mostRecentData.map((frontMatter) => {
                    return <BlogPost {...frontMatter} />;
                })}
            </section>
        </>
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
