import Head from "next/head";

import styles from "../styles/post.module.scss";

export default function Post({ children, frontMatter }) {
    console.log({ children });
    console.log({ frontMatter });

    const { title } = frontMatter;

    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>{title}</h1>
                <div>{children}</div>
            </main>
        </div>
    );
}
