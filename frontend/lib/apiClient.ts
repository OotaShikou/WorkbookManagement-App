import axios from "axios";
import { parseCookies, setCookie, destroyCookie } from 'nookies';

const apiClient = axios.create({
  baseURL: process.browser
    ? `${process.env.NEXT_PUBLIC_API_ENDPOINT}`
    : "http://web/manage/api/v1/",
  headers: {
    "Content-Type": "application/json",
    'uid': parseCookies().uid,
    'client': parseCookies().client,
    "access-token": parseCookies()["access-token"],
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

export default apiClient;
