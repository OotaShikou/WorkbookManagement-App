import useSWR, { mutate } from "swr";
import apiClient from "../lib/apiClient";
import { FetchQuestionType } from "../types/questionType";

//------------- ********************* -----------------/
//------------- 全件データを取得する -----------------/
export const useFetchQuestionTypes = (): FetchQuestionType => {
  const allDatafetcher = (url: string) =>
    apiClient(url).then((res) => res.data);
  const allDatafetcherUrl = "types";

  const { data, error, mutate } = useSWR(allDatafetcherUrl, allDatafetcher);
  return { data, error, mutate };
};
//------------- 全件データを取得する fin -----------------/
//------------- ********************* -----------------/
