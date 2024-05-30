import axios from "axios";
import { getTokenFromLocalStorage } from "../helper/localstorage.helper.ts";

export const instance = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    Authorization: "Bearer " + getTokenFromLocalStorage() || "",
  },
});
