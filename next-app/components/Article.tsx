export default function Article({ className = 'rounded-lg' }) {
    return (
        <article className={`p-4 ${className}`}>
            <h3 className="text-2xl mb-2 font-medium">Post Title</h3>
            <span className="text-gray-700 dark:text-gray-200 mb-4 block">
                12 Feb 21 | Design System
            </span>
            <p className="text-lg">
                Life comes in a package. This package includes happiness and sorrow, failure and success, hope and despair.
                Life is a learning process. Experiences in life teach us new lessons and make us a better person.
                With each passing day we learn to handle various situations.
            </p>
        </article>
    );
}