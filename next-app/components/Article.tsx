import Link from "next/link";

export default function Article({ post, className = 'rounded-lg' }: { post: any, className: string }) {
    return (
        <article className={`p-4 ${className}`}>
            <Link href={`blog/${post.slug}`}>
                <h3 className="text-2xl mb-2 font-medium cursor-pointer">{post.title}</h3>
            </Link>
            <span className="text-gray-700 dark:text-gray-200 mb-4 block">
                {post.date} | {post.tags.map((tag: string) => tag).join(', ')}
            </span>
            <p className="text-lg">{post.description}</p>
        </article>
    );
}