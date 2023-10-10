import useSWR, { mutate } from "swr";
import apiClient from "../src/apiClient";
import { FetchWorkbook } from "../types/workbook";

//------------- ********************* -----------------/
//------------- 全件データを取得する -----------------/
export const useFetchWorkbook = (): FetchWorkbook => {
  const allDatafetcher = (url: string) =>
    apiClient(url).then((res) => res.data);
  const allDatafetcherUrl = "workbooks";

  const { data, error, mutate } = useSWR(allDatafetcherUrl, allDatafetcher);
  return { data, error, mutate };
};
//------------- 全件データを取得する fin -----------------/
//------------- ********************* -----------------/
