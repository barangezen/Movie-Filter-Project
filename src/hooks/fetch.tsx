import { useQuery } from "react-query";

export default function useFetch<T>(getFunction: () => Promise<any>) {
  return useQuery<{ total: number; entries: T[] }>("data", getFunction);
}
