import { useState, useEffect } from "react";
import useSWR, { mutate } from "swr";
import apiClient from "../src/apiClient";

//------------- ********************* -----------------/
//------------- 全件データを取得する -----------------/
export interface FetchQuestion {
  data: any | undefined;
  error: Error | undefined;
  mutate: () => void;
}
export const useFetchQuestion = (): FetchQuestion => {
  const allDatafetcher = (url: string) =>
    apiClient(url).then((res) => res.data);
  const allDatafetcherUrl = "questions";

  const { data, error, mutate } = useSWR(allDatafetcherUrl, allDatafetcher);
  return { data, error, mutate };
};
//------------- 全件データを取得する fin -----------------/
//------------- ********************* -----------------/

//------------- ********************* -----------------/
//------------- 特定データを取得する -----------------/
export interface FetchShowQuestion {
  data: any | undefined;
  error: Error | undefined;
  mutate: () => void;
}
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
export interface CreateQuestion {
  content: string;
  answer: string;
}
export const useCreateQuestion = (params: CreateQuestion) => {
  apiClient
    .post("questions", {
      content: params.content,
      answer: params.answer,
    })
    .then(() => {
      mutate("questions");
    })
    .catch((error) => {
      console.log(error);
    });
};
//------------- データを作成する fin -----------------/
//------------- ********************* -----------------/

//------------- ********************* -----------------/
//------------- データを更新する -----------------/
export interface UpdateQuestion {
  content: string;
  answer: string;
  id: number;
}
export const useUpdateQuestion = (params: UpdateQuestion) => {
  apiClient
    .put(`questions/${params.id}`, {
      content: params.content,
      answer: params.answer,
    })
    .then(() => {
      mutate("questions");
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
      mutate("questions");
    })
    .catch((error) => {
      console.log(error);
    });
};
//------------- データを削除する fin -----------------/
//------------- ********************* -----------------/
