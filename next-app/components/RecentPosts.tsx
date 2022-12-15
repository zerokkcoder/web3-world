import Article from "./Article";
import SectionHeader from "./SectionHeader";

export default function RecentPosts() {
    return (
        <section className="px-6">
            <div className="max-w-4xl mx-auto py-12">
                <SectionHeader title="Recent posts" href="/blog" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Article />
                    <Article />
                </div>
            </div>
        </section>
    );
}