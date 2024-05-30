import { instance } from "./axios.api.ts";
import { ICategory } from "../types/types.ts";
import { useQuery } from "@tanstack/react-query";

const FetchCategoriesFn = async () => {
  const { data } = await instance.get<ICategory[]>("/categories");
  return data;
};

export const useCategoriesQuery = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: FetchCategoriesFn,
    refetchOnWindowFocus: false,
  });
};
