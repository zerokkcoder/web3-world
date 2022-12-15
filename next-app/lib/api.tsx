import fs from 'fs';
import matter from 'gray-matter';


export const getAllPosts = () => {
    const files = fs.readdirSync('./posts');

    const posts = files.map((fileName: any) => {
        const slug = fileName.replace('.md', '');
        const { frontmatter } = getPostBySlug(slug);
        return {
            slug,
            ...frontmatter,
        };
    }).sort((post1: any, post2: any) => (post1.date > post2.date ? -1 : 1));

    return posts;
}

export const getPostBySlug = (slug: string) => {
    const fileName = fs.readFileSync(`./posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
        frontmatter,
        content,
    }
}

export const getAllWork = () => {
    const data = fs.readFileSync('contants/data.json', 'utf-8');
    const jsonData = JSON.parse(data);
    return jsonData.work;
}