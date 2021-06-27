import Head from "next/head";
import { Header } from "../src/header";
import { Body } from "../src/body";
import { companyName } from "../data";
import path from "path";
import { promises as fs } from "fs";
import grayMatter from "gray-matter";

export default function Home({ posts }) {
    // console.log({ posts });
    return (
        <div>
            <Head>
                <title>{companyName ? companyName.name : ""}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Maneuver Ventures" />
            </Head>

            <Header />
            <Body />
        </div>
    );
}
export async function getStaticProps() {
    const postsDirectory = path.join(process.cwd(), "pages/posts");
    const filenames = await fs.readdir(postsDirectory);

    const files = await Promise.all(
        filenames.map(async (filename) => {
            const filePath = path.join(postsDirectory, filename);
            const content = await fs.readFile(filePath, "utf8");
            const matter = grayMatter(content);

            return {
                filename,
                matter,
            };
        })
    );

    const posts = files.map((file) => {
        return {
            path: `/posts/${file.filename.replace(".mdx", "")}`,
            title: file.matter.data.title,
        };
    });

    return {
        props: {
            posts,
        },
    };
}
