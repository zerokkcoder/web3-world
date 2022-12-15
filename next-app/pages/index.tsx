import { GetStaticProps } from "next";
import Head from "next/head";
import FeaturedWork from "../components/FeaturedWork";
import Hero from "../components/Hero";
import RecentPosts from "../components/RecentPosts";
import { getAllPosts, getAllWork } from "../lib/api";

export const getStaticProps: GetStaticProps<{ posts: any }> = async () => {

  const posts = getAllPosts();
  const work = getAllWork();

  return {
    props: {
      posts,
      work,
    },
  }
}

export default function Home({ posts, work }: { posts: any, work: any }) {
  return (
    <>
      <Head>
        <title>ZeroDot618's Portfolio</title>
        <meta name="description" content="creative developer" />
        <link ref="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <RecentPosts posts={posts} />
      <FeaturedWork work={work} />
    </>

  )
}
