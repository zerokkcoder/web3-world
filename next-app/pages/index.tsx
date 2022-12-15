import Head from "next/head";
import FeaturedWork from "../components/FeaturedWork";
import Hero from "../components/Hero";
import RecentPosts from "../components/RecentPosts";

export default function Home() {
  return (
    <>
      <Head>
        <title>ZeroDot618's Portfolio</title>
        <meta name="description" content="creative developer" />
        <link ref="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <RecentPosts />
      <FeaturedWork />
    </>

  )
}
