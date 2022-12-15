import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="container mx-auto flex justify-between h-16 items-center">
            <Link href="/">
                <Image className="rounded-full" src="/logo.jpg" alt="logo" width="36" height="36"/>
            </Link>
            <nav>
                <ul className="flex gap-6 font-medium">
                    <li>
                        <Link href='#'>Blog</Link>
                    </li>
                    <li>
                        <Link href='#'>Work</Link>
                    </li>
                    <li>
                        <Link href='#'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}