import { MDXRemote } from "next-mdx-remote";
import { getFiles, getFilesBySlug } from "../../src/lib/mdx";
import BlogLayout from "../../layouts/blogs";

export default function Blog({ mdxSource, frontMatter }) {
    return (
        <BlogLayout frontMatter={frontMatter}>
            <MDXRemote {...mdxSource} />
        </BlogLayout>
    );
}

export async function getStaticPaths() {
    const posts = await getFiles("blogs");

    return {
        paths: posts.map((p) => ({
            params: {
                slug: p.replace(/\.mdx/, ""),
            },
        })),

        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const post = await getFilesBySlug("blogs", params.slug);

    return { props: { ...post } };
}
