import { useQuery } from "@tanstack/react-query";
import axiosClient from "../axiosClient";
import { DataItem } from "../common/types";

export const useGetArticles = () => {
  return useQuery<DataItem[]>({
    queryKey: ["articles"],
    queryFn: async () => {
      const response = await axiosClient.get("/articles?populate=*");
      return response.data;
    },
  });
};
export const useGetArticleById = (documentId: string) => {
  return useQuery<DataItem>({
    queryKey: ["articles/id"],
    queryFn: async () => {
      const response = await axiosClient.get(
        `/articles/${documentId}?populate[cover][fields][0]=*&populate[blocks][populate]=*`
      );
      return response.data;
    },
    enabled: documentId !== "",
  });
};

export default { useGetArticles, useGetArticleById };
