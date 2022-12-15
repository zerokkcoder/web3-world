import Link from "next/link";
import { FiGithub, FiTwitter } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="container mx-auto flex justify-center flex-col items-center h-36 gap-6">
            <nav>
                <ul className="flex gap-6">
                    <li>
                        <Link href="#">
                            <FiGithub />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <FiTwitter />
                        </Link>
                    </li>
                </ul>
            </nav>
            <p className="text-sm">&copy; 2022 ZeroDot618. All right reserved.</p>
        </footer>
    );
}