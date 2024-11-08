"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import {useState} from "react";

const navLinks = [
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
    { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [input, setInput] = useState('');
    
    return (
        <div>
            <div>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={{border: '1px solid black'}}
                />
            </div>
            <h1>Auth Layout</h1>
            <ul>
                {navLinks.map((link) => {
                    const isActive = pathname.startsWith(link.href);
                    return (
                        <li key={link.href}>
                            <Link href={link.href} className={isActive ? "font-bold mr-4" : "text-blue-500"}>
                                {link.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            {children}
        </div>
    );
}
