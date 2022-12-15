import { GetStaticProps } from "next";
import Head from "next/head";
import FeaturedWork from "../components/FeaturedWork";
import Hero from "../components/Hero";
import RecentPosts from "../components/RecentPosts";
import { getAllPosts } from "../lib/api";

export const getStaticProps: GetStaticProps<{ posts: any }> = async () => {

  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  }
}

export default function Home({ posts }: { posts: any }) {
  return (
    <>
      <Head>
        <title>ZeroDot618's Portfolio</title>
        <meta name="description" content="creative developer" />
        <link ref="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <RecentPosts posts={posts} />
      <FeaturedWork />
    </>

  )
}
