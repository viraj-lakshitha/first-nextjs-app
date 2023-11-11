"use client";
import BookItem from "@/components/Books/BookItem";
import { useFetchBooks } from "@/utils/api/ApiUtils";
import { useQuery } from "react-query";

export default function Books() {
  const { data, error, isLoading } = useQuery("books", useFetchBooks);

  if (isLoading) {
    return (
      <div className="flex min-h-screen min-w-screen justify-center items-center text-yellow-500">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen min-w-screen justify-center items-center text-red-500">
        Error...
      </div>
    );
  }

  return (
    <div className="flex min-w-screen flex-col items-center justify-center mt-10">
      <p>NYTime Books with Abstracts</p>
      {data?.results.lists.map((book, index) => (
        <div key={index} className="flex justify-center w-4/5 ">
          <BookItem
            title={book.display_name}
            books={book.books.map((e) => e.title).join(", ")}
          />
        </div>
      ))}
    </div>
  );
}
