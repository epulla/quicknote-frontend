import axios from "axios";
import { BACKEND_URL } from "../defaults.constants";

const Api = axios.create({
  baseURL: BACKEND_URL,
});

export default Api;
