import hydrate from "next-mdx-remote";
import { getFiles, getFilesBySlug } from "../../lib/mdx";
import BlogLayout from "../../layouts/blog";

export default function Blog({ mdxSource, frontMatter }) {
    console.log("here");
    const content = hydrate(mdxSource);
    console.log({ mdxSource });
    console.log({ frontMatter });

    return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>;
}

export async function getStaticPaths() {
    const posts = await getFiles("blog");

    console.log({ posts });

    return {
        paths: posts.map((p) => {
            params: {
                slug: p.replace(/\.mdx/, "");
            }
        }),

        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    console.log({ params });
    const post = await getFilesBySlug("blog", params.slug);

    return { props: post };
}
