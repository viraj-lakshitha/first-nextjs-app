import axios from "axios";
import { Pokedex, TopNewsResponse } from "./types";

export const useFetchTopNews = async (): Promise<TopNewsResponse> => {
  const API_KEY = process.env.NEXT_PUBLIC_NYTIME_API_KEY;
  const response = await axios.get(
    `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${API_KEY}`
  );
  return response?.data;
};

export const useFetchBooks = async (): Promise<Pokedex> => {
  const response = await axios.get("/api/books");
  return response.data;
};
