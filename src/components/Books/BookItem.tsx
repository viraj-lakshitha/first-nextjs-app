import Link from "next/link";

export default function BookItem({ title, books }: any) {
  return (
    <div className="bg-transparent rounded-md border border-blue-300 w-3/5 my-4 p-4">
      <p className="font-bold text-center">{title}</p>
      <p className="text-xs">{books}</p>
    </div>
  );
}
