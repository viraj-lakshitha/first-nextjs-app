"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const posts = [
    {
        id: 1,
        content: "Post1",
        comments: [
            {
                id: 1,
                content: "Comment1",
            },
            {
                id: 2,
                content: "Comment2",
            },
            {
                id: 3,
                content: "Comment3",
            },
        ],
    },
    {
        id: 2,
        content: "Post2",
        comments: [
            {
                id: 1,
                content: "Comment1",
            },
            {
                id: 2,
                content: "Comment2",
            },
            {
                id: 3,
                content: "Comment3",
            },
        ],
    },
    {
        id: 3,
        content: "Post3",
        comments: [
            {
                id: 1,
                content: "Comment1",
            },
            {
                id: 2,
                content: "Comment2",
            },
            {
                id: 3,
                content: "Comment3",
            },
        ],
    },
    {
        id: 4,
        content: "Post4",
        comments: [
            {
                id: 1,
                content: "Comment1",
            },
            {
                id: 2,
                content: "Comment2",
            },
            {
                id: 3,
                content: "Comment3",
            },
        ],
    },
];

export default function Posts() {
    const router = useRouter();

    return (
        <div className="flex justify-center flex-col items-center min-h-screen">
            <p className="text-4xl mb-10">Post Page</p>
            {posts.map((post) => (
                <div className="grid grid-flow-col gap-2">
                    <Link
                        key={post.id}
                        href={`/posts/${post.id}`}
                        className="bg-blue-500 border-none p-2 m-2 rounded-md"
                    >
                        {post.content}
                    </Link>
                    {post.comments.map((comment) => (
                        <Link
                            key={comment.id}
                            href={`/posts/${post.id}/comments/${comment.id}`}
                            className="bg-red-500 border-none p-2 m-2 rounded-md"
                        >
                            {comment.content}
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    );
}
