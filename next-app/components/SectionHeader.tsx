import Link from "next/link";

export default function SectionHeader({title, href}:{title:string, href:string}) {
    return (
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">{title}</h2>
            <Link className="font-bold" href={href}>View all</Link>
        </div>
    );
}