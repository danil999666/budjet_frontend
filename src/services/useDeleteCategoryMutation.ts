import { instance } from "./axios.api.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const DeleteCategoryFn = async (id: number) => {
  await instance.delete(`/categories/category/${id}`);
};

export const useDeleteCategoryMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: DeleteCategoryFn,
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
    },
  });
};
