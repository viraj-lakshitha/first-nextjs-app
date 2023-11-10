'use client'

import { useParams } from "next/navigation"

export default function PostId() {
    const { postId } = useParams();
    return <div className="flex justify-center items-center min-h-screen">Post {postId} Page</div>
}