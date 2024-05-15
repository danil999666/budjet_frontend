import axios from "axios";
import { getTokenFromLocalStorage } from "../helper/localstorage.helper";

export const instance = axios.create({
    baseURL: 'http://localhost:3002/api',
    headers: {
        Authorization: 'Bearer ' + getTokenFromLocalStorage() || '', 
    },
})