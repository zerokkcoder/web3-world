import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ThemeToggler from "./ThemeToggler";
import { FiGithub, FiTwitter } from "react-icons/fi";

const routes = ['Blog', 'Work']; // Can add menu in here.

export default function Header() {
    const router = useRouter();
    return (
        <header className="w-full mx-auto flex justify-between h-16 items-center px-2 md:px-6 shadow">
            <Link href="/">
                <div className="flex items-center gap-2 font-medium">
                    <Image className="rounded-full" src="/logo.jpg" alt="logo" width="36" height="36" />
                    <span>ZeroDot618</span>
                </div>
            </Link>
            <div className="flex justify-center items-center gap-6">
                <ThemeToggler />
                <Link href="https://github.com/zerodot618" target="_blank">
                    <FiGithub />
                </Link>
                <Link href="https://twitter.com/bubuhuanggz" target="_blank">
                    <FiTwitter />
                </Link>
            </div>
            <nav>
                <ul className="flex gap-6 font-medium items-center">
                    {routes.map((route) => {
                        return (
                            <li key={route} className={`hover:text-yellow-400 hover:underline hover:underline-offset-4 ${router.pathname === `/${route.toLowerCase()}` && 'text-yellow-400'}`}>
                                <Link href={`/${route.toLowerCase()}`}>{route.toUpperCase()}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}