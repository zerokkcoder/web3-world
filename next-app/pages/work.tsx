import Head from "next/head";
import Work from "../components/Work";

export default function WorkPage() {
    return (
        <>
            <Head>
                <title>ZeroDot618's Work</title>
                <meta name="description" content="work's description" />
                <link ref="icon" href="/favicon.ico" />
            </Head>
            <section className="px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6 p-4">Work</h1>

                    <Work imgSrc="" />
                    <Work imgSrc="" />
                    <Work imgSrc="" />
                    <Work imgSrc="" />
                </div>
            </section>
        </>
    );
}