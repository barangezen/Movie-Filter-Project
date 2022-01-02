import axios from "axios";
import { useQuery } from "react-query";

const fetchFeed = () =>
  axios.get("feed/sample.json").then((response) => response.data);
export default function useFetch() {
  return useQuery("data", fetchFeed);
}
