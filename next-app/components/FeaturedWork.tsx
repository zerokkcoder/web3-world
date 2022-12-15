import SectionHeader from "./SectionHeader";
import Work from "./Work";

export default function FeaturedWork({ work }: { work: any }) {
    return (
        <section className="px-6">
            <div className="max-w-4xl mx-auto py-12">
                <SectionHeader title="Featured work" href="/work" />

                <div className="flex flex-col gap-2">
                    {work.map((workItem: any) => (
                        <Work imgSrc="" key={workItem.title} item={workItem} />
                    ))}
                </div>
            </div>
        </section>
    );
}