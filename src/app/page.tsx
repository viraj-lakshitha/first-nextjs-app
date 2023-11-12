import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center flex-col justify-center min-h-screen">
      <p className="text-3xl underline mb-2">Home Page</p>
      <Link href="/news">
        Navigate:
        <span className="font-mono text-blue-600 underline">/news</span>
      </Link>
      <Link href="/posts">
        Navigate:
        <span className="font-mono text-blue-600 underline">/posts</span>
      </Link>
      <Link href="/books">
        Navigate:
        <span className="font-mono text-blue-600 underline">/books</span>
      </Link>
    </div>
  );
}
