import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from 'react-icons/fi';

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();
    const [mouted, setMouted] = useState(false);
    useEffect(() => setMouted(true), [])
    if (!mouted) return null;
    return (
        <button
            className="w-8 h-8 bg-white rounded-full dark:bg-slate-800 flex items-center justify-center hover:ring-2 ring-yellow-400 transition-all duration-300 focus:outline-none"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle Dark Mode"
        >
            {theme === 'light' ? (
                <FiMoon className=" text-yellow-400 w-5 h-5" />
            ) : (
                <FiSun className="text-yellow-400 w-5 h-5" />
            )}
        </button>
    );

}

export default ThemeToggler;