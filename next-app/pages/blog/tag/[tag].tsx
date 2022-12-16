import { GetStaticPaths } from "next";
import Head from "next/head";
import Article from "../../../components/Article";
import { getAllPosts, getAllPostsByTag } from "../../../lib/api";

export const getStaticPaths: GetStaticPaths = async () => {

    const posts = getAllPosts();
    const tags = new Set(posts.flatMap((post: any) => post.tags));

    return {
        paths: [...tags].map((tag: any) => {
            return {
                params: {
                    tag,
                },
            };
        }),
        fallback: false,
    }
}

export const getStaticProps = async ({ params: { tag } }: { params: { tag: string } }) => {
    const posts = getAllPostsByTag({ tag });
    return {
        props: {
            posts,
            tag,
        },
    }
}

export default function Tag({ posts, tag }: { posts: any, tag: string }) {
    return (
        <>
            <Head>
                <title>ZeroDot618's Blog</title>
                <meta name="description" content="blog's description" />
                <link ref="icon" href="/favicon.ico" />
            </Head>
            <section className="px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6 p-4">All `{tag}` posts</h1>
                    {
                        posts.map((post: any) => (
                            <Article className="border-b-2" key={post.slug} post={post} />
                        ))
                    }
                </div>
            </section>
        </>
    );
}

