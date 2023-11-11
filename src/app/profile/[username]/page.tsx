"use client";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function UserProfile() {
    const { username } = useParams();
    return (
        <div className="flex justify-center flex-col items-center min-h-screen">
            <p className="mb-2 text-2xl font-bold font-serif">{username}&lsquo;s Page</p>
            <Image
                src="https://picsum.photos/200/200"
                width={200}
                height={200}
                alt="random-picsum"
                lazyRoot="lazy"
                className="rounded-full"
            />
        </div>
    );
}
