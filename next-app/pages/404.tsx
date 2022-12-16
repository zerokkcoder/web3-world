import Head from "next/head";
import Image from "next/image";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>ZeroDot618's 404</title>
                <meta name="description" content="not found page" />
                <link ref="icon" href="/favicon.ico" />
            </Head>
            <section className="px-6 py-12">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <Image className="rounded-lg mb-5" src="/page_not_found.svg" alt="Not Found Image" width={431} height={286} />
                    <p className="font-medium">404 - Ohoo! Page Not Found</p>
                </div>
            </section>
        </>
    );
}