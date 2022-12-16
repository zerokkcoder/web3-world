import Image from "next/image";

export default function Hero() {
    return (
        <header className="px-6">
            <div className="max-w-4xl mx-auto flex gap-16 items-center flex-col-reverse md:flex-row">
                <div>
                    <h1 className="text-3xl font-bold mb-6">
                        Hi, I'm Zerodot618
                        <br />
                        Creative Developer
                    </h1>
                    <p className="text-lg mb-6">
                        Life comes in a package. This package includes happiness and sorrow, failure and success, hope and despair.
                        Life is a learning process. Experiences in life teach us new lessons and make us a better person.
                        With each passing day we learn to handle various situations.
                    </p>
                    <a href="#" className="bg-black text-white hover:bg-gray-500 dark:bg-white dark:text-black hover:dark:bg-gray-500 px-6 py-3 text-lg rounded">Check my work</a>
                </div>
                <span>
                    <Image src="/programming.svg" alt="Image Of Programming" width="787" height="573" />
                </span>
            </div>
        </header>
    );
}