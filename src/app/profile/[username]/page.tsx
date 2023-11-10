'use client'
import { useParams } from "next/navigation"

export default function UserProfile() {
    const { username } = useParams();
    return (
        <div className="flex justify-center items-center min-h-screen">{username}&lsquo;s Page</div>
    )
}