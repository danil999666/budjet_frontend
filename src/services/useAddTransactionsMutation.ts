import { instance } from "./axios.api.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const AddTransactionFn = async (data: {
  title: string;
  amount: number;
  category: string;
  type: string;
}) => {
  await instance.post("/transactions", data);
};

export const useAddTransactionsMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: AddTransactionFn,
    onSuccess: () => {
      queryClient.invalidateQueries(["transactions"]);
    },
  });
};
