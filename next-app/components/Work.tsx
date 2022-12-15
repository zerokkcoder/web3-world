export default function Work({ imgSrc = '' }: { imgSrc: string }) {
    return (
        <article className="flex items-center border-b-2 py-6 flex-col md:flex-row">
            <img className="w-4/5 md:w-1/3 mr-6 rounded-lg" src={imgSrc ? imgSrc : '/work_cover_moonlight.svg'} />
            <div>
                <h3 className="text-2xl mb-2 font-medium">Work title</h3>
                <span className="text-gray-700 dark:text-gray-200 mb-4 block">
                    <span className="bg-black dark:bg-white text-white dark:text-black px-2 mr-3 rounded-xl">
                        2022
                    </span>
                    Dashboard
                </span>
                <p className="text-lg">
                    Life comes in a package. This package includes happiness and sorrow, failure and success, hope and despair.
                    Life is a learning process. Experiences in life teach us new lessons and make us a better person.
                    With each passing day we learn to handle various situations.
                </p>
            </div>
        </article>
    );
}