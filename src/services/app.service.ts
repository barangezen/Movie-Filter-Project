import axios from "axios";

const BASE_URL = process.env.REACT_APP_PUBLIC_URL;

export class AppService {
  static get = () => {
    return axios.get(BASE_URL + "feed/sample.json").then(({ data }) => data);
  };
}
