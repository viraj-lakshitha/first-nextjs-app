"use client";
import { useParams, useRouter } from "next/navigation";

export default function CommentId() {
  const router = useRouter();
  const { postId, commentId } = useParams();
  return (
    <div className="flex justify-center flex-col items-center min-h-screen">
      <p className="text-md">
        Post {postId} Page | Comment {commentId} Page
      </p>
      <button
        onClick={() => router.back()}
        className="bg-transparent border-none p-1 m-1 bg-green-400 rounded-md"
      >
        Go back
      </button>
    </div>
  );
}