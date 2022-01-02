import axios from "axios";
import { useQuery } from "react-query";
const fetchFeed = () =>
  axios
    .get(process.env.REACT_APP_PUBLIC_URL + "feed/sample.json")
    .then((response) => response.data);
export default function useFetch() {
  return useQuery("data", fetchFeed);
}
