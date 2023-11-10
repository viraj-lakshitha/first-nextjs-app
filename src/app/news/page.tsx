"use client";
import NewsItems from "@/components/News/NewsItem";
import { useFetchTopNews } from "@/utils/api/ApiUtils";
import { useQuery } from "react-query";

export default function News() {
  const { data, error, isLoading } = useQuery("topNews", useFetchTopNews);

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
    <div className="flex items-center flex-col">
      <p className="text-2xl mt-10">
        Top News from NewYork Times
      </p>
      {data?.results.map((item) => (
        <NewsItems {...item} />
      ))}
    </div>
  );
}
