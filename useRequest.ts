import axios from "axios";
import useSWR from "swr";

export const fetcher = (url: string) => axios.get(url);
const baseUrl = "https://example.com/thread/";

export const useGetThread = (path: string) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const url = baseUrl + path;
  const { data: thread, error } = useSWR(url, fetcher);

  return { thread, error };
};
