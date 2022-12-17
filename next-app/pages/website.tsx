import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Sites from "../components/Sites";
import { Websites } from "../contants/site";

export default function Website() {
    const router = useRouter();
    const active = router.asPath.split("#")[1];

    return (
        <>
            <Head>
                <title>ZeroDot618's Website</title>
                <meta name="description" content="creative developer" />
                <link ref="icon" href="/favicon.ico" />
            </Head>
            <section className="px-6">
                <div className="max-w-4xl mx-auto relative">
                    <div className="fixed top-20 left-0 text-white dark:text-black bg-black dark:bg-white rounded-r-lg font-medium">
                        <ul className="p-2">
                            {Websites.map((website, index) => (
                                <li key={index} className={`hover:text-yellow-400  ${(active === website.title.replace(' ', '-') || (!active && index === 0)) && 'text-yellow-400'}`}><Link href={"#" + website.title.replace(' ', '-')}>{website.title}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <h1 className="text-3xl font-bold mb-6 p-4 underline underline-offset-8">Website Navigation</h1>
                    {Websites.map((website, index) => (
                        <Sites index={index} website={website} />
                    ))}
                </div>
            </section>
        </>

    )
}