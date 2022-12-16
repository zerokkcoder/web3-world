import Link from "next/link";

export default function Article({ post, className = 'rounded-lg' }: { post: any, className: string }) {

    const getTagLink = (tag: string) => {
        return (
            <Link className="underline" href={`/blog/tag/${tag}`}>{tag}</Link>
        );
    };

    return (
        <article className={`p-4 ${className}`}>
            <Link href={`blog/${post.slug}`}>
                <h3 className="text-2xl mb-2 font-medium cursor-pointer">{post.title}</h3>
            </Link>
            <span className="text-gray-700 dark:text-gray-200 mb-4 block">
                {post.date} | {post.tags.map((tag: string) => getTagLink(tag)).reduce((prev: any, curr: any) => [prev, ', ', curr])}
            </span>
            <p className="text-lg">{post.description}</p>
        </article>
    );
}