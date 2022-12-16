import { GetStaticPaths } from "next";
import md from 'markdown-it';

import { getAllPosts, getPostBySlug } from "../../lib/api";

export const getStaticPaths: GetStaticPaths = async () => {

    const posts = getAllPosts();

    return {
        paths: posts.map((post: any) => {
            return {
                params: {
                    slug: post.slug,
                },
            };
        }),
        fallback: false,
    }
}

export const getStaticProps = async ({ params: { slug } }: { params: { slug: string } }) => {
    const post = getPostBySlug(slug);
    return {
        props: post,
    }
}

export default function PostPage({ frontmatter, content }: { frontmatter: any, content: any }) {
    return (
        <section className="px-6">
            <div className="max-w-4xl mx-auto py-12">
                <div className="prose mx-auto dark:prose-invert">
                    <h1>{frontmatter.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
                </div>
            </div>
        </section>
    );
}