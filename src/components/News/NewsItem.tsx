import { TopNews } from "@/utils/api/types";
import Link from "next/link";

export default function NewsItems({ title, url, abstract }: TopNews) {
    return <div className="bg-transparent rounded-md border border-red-300 w-3/5 my-4 p-4">
        <p className="font-bold text-center">{title}</p>
        <p className="text-xs">{abstract} <Link className="text-blue-500 underline" href={url}>View</Link></p>
    </div>;
}