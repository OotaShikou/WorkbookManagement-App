import useSWR, { mutate } from "swr";
import apiClient from "../src/apiClient";
import {
  FetchQuestion,
  FetchShowQuestion,
  CreateQuestion,
  UpdateQuestion,
} from "../types/question";

//------------- ********************* -----------------/
//------------- 全件データを取得する -----------------/
export const useFetchQuestion = (): FetchQuestion => {
  const allDatafetcher = (url: string) =>
    apiClient(url).then((res) => res.data);
  const allDatafetcherUrl = "questions?workbook_id=1";

  const { data, error, mutate } = useSWR(allDatafetcherUrl, allDatafetcher);
  return { data, error, mutate };
};
//------------- 全件データを取得する fin -----------------/
//------------- ********************* -----------------/

//------------- ********************* -----------------/
//------------- 特定データを取得する -----------------/
export const useFetchShowQuestion = (questionId: number): FetchShowQuestion => {
  const showDatafetcher = (url: string) =>
    apiClient(url).then((res) => res.data);
  const showDatafetcherUrl = `questions/${questionId}`;

  const { data, error, mutate } = useSWR(showDatafetcherUrl, showDatafetcher);
  return { data, error, mutate };
};
//------------- 特定データを取得する fin -----------------/
//------------- ********************* -----------------/

//------------- ********************* -----------------/
//------------- データを作成する -----------------/
export const useCreateQuestion = (params: CreateQuestion) => {
  apiClient
    .post("questions", {
      content: params.content,
      answer: params.answer,
      workbook_id: params.workbook_id,
      type_id: params.workbook_id,
    })
    .then(() => {
      mutate(
        (key) =>
          typeof key === "string" && key.startsWith("questions?workbook_id")
      );
    })
    .catch((error) => {
      console.log(error);
    });
};
//------------- データを作成する fin -----------------/
//------------- ********************* -----------------/

//------------- ********************* -----------------/
//------------- データを更新する -----------------/
export const useUpdateQuestion = (params: UpdateQuestion) => {
  apiClient
    .put(`questions/${params.id}`, {
      content: params.content,
      answer: params.answer,
      workbook_id: params.workbook_id,
      type_id: params.workbook_id,
    })
    .then(() => {
      mutate(
        (key) =>
          typeof key === "string" && key.startsWith("questions?workbook_id")
      );
    })
    .catch((error) => {
      console.log(error);
    });
};
//------------- データを更新する fin -----------------/
//------------- ********************* -----------------/

//------------- ********************* -----------------/
//------------- データを削除する -----------------/
export const useDeleteQuestion = (id: number) => {
  apiClient
    .delete(`questions/${id}`)
    .then(() => {
      mutate(
        (key) =>
          typeof key === "string" && key.startsWith("questions?workbook_id")
      );
    })
    .catch((error) => {
      console.log(error);
    });
};
//------------- データを削除する fin -----------------/
//------------- ********************* -----------------/
