import axios from "axios";
// import { parseCookies, setCookie, destroyCookie } from 'nookies'

const apiClient = axios.create({
  baseURL: process.browser
    ? `${process.env.NEXT_PUBLIC_API_ENDPOINT}`
    : "http://web/manage/api/v1/",
  headers: {
    "Content-Type": "application/json",
    // 'uid': Cookies.get("uid"),
    // 'client': Cookies.get("client"),
    // "access-token": Cookies.get("access-token"),
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

export default apiClient;
