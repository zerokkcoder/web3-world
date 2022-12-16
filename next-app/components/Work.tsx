import Image from "next/image";

export default function Work({ item }: { item: any }) {
    return (
        <article className="flex items-center border-b-2 py-6 flex-col md:flex-row">
            <Image className="w-4/5 md:w-1/3 mr-6 rounded-lg" alt="Image cover of Work" src={item.image ? item.image : '/work_cover_moonlight.svg'} width="1014" height="503" />
            <div>
                <h3 className="text-2xl mb-2 font-medium">{item.title}</h3>
                <span className="text-gray-700 dark:text-gray-200 mb-4 block">
                    <span className="bg-black dark:bg-white text-white dark:text-black px-2 mr-3 rounded-xl">
                        {item.year}
                    </span>
                    {item.category}
                </span>
                <p className="text-lg">{item.description}</p>
            </div>
        </article>
    );
}