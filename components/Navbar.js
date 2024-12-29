"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-red-900 text-white p-3 flex justify-between items-center max-w-6xl m-auto w-[90%] mt-4 rounded-md">
            <Link href="/" className="text-xl font-bold">
            Short<span className="text-yellow-700">ify</span>
            </Link>
            <Link href="/" className="bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700">Try Now</Link>
        </nav>
    );
}