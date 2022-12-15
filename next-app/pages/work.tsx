import Head from "next/head";
import Work from "../components/Work";
import { getAllWork } from "../lib/api";

export async function getStaticProps() {
    const work = getAllWork();

    return {
        props: {
            work,
        },
    };
}

export default function WorkPage({ work }: { work: any }) {

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
                    {work.map((workItem: any) => (
                        <Work key={workItem.title} item={workItem} />
                    ))}
                </div>
            </section>
        </>
    );
}