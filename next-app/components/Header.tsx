import Image from "next/image";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";

export default function Header() {
    return (
        <header className="container mx-auto flex justify-between h-16 items-center">
            <Link href="/">
                <div className="flex items-center gap-2 font-medium">
                    <Image className="rounded-full" src="/logo.jpg" alt="logo" width="36" height="36" />
                    <span>ZeroDot618</span>
                </div>
            </Link>
            <nav>
                <ul className="flex gap-6 font-medium items-center">
                    <li>
                        <Link href='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link href='/work'>Work</Link>
                    </li>
                    <li>
                        <Link href='#'>Contact</Link>
                    </li>
                    <li>
                        <ThemeToggler />
                    </li>
                </ul>
            </nav>
        </header>
    );
}