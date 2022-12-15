import Link from "next/link";
import { FiGithub, FiTwitter } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="container mx-auto flex justify-center flex-col items-center h-36 gap-6">
            <nav>
                <ul className="flex gap-6">
                    <li>
                        <Link href="https://github.com/zerodot618" target="_blank">
                            <FiGithub />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://twitter.com/bubuhuanggz" target="_blank">
                            <FiTwitter />
                        </Link>
                    </li>
                </ul>
            </nav>
            <p className="text-sm">&copy; 2022 ZeroDot618. All right reserved.</p>
        </footer>
    );
}