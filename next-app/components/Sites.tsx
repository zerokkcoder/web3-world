import Link from "next/link";
import { useRouter } from "next/router";
import { SiSitepoint } from 'react-icons/si';

export default function Sites({ index, website }: { index: any, website: any }) {
    const router = useRouter();
    const active = router.asPath.split("#")[1];
    return (
        <>
            <h2 className={`text-2xl font-bold ${(active === website.title.replace(' ', '-') || (!active && index === 0)) && 'text-yellow-400'}`} id={website.title.replace(' ', '-')}>{website.title}</h2>
            <div className="w-full grid grid-cols-3 md:grid-cols-6 gap-2 py-6">
                {website.sites.map((site: any, index: any) => (
                    <div key={index} className="flex items-center hover:underline hover:text-yellow-400 hover:underline-offset-4">
                        <SiSitepoint />
                        <Link className="font-medium ml-2" href={site.url} target="_blank">{site.name}</Link>
                    </div>
                ))}
            </div>
        </>
    );
}