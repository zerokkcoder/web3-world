import SectionHeader from "./SectionHeader";
import Work from "./Work";

export default function FeaturedWork() {
    return (
        <section className="px-6">
            <div className="max-w-4xl mx-auto py-12">
                <SectionHeader title="Featured work" href="/work" />

                <div className="flex flex-col gap-2">
                    <Work imgSrc="" />
                    <Work imgSrc="" />
                </div>
            </div>
        </section>
    );
}