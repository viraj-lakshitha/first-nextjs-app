"use client";
import Link from "next/link";

export default function Header() {
  return (
    <div className="min-w-screen bg-gray-300 text-san justify-between font-sans sticky h-16 flex items-center p-1 px-2">
      Getting started with NextJS
      <Link href={"/"} className="bg-white px-2 p-1 rounded-lg">
        Home
      </Link>
    </div>
  );
}
