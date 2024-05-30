import { instance } from "./axios.api.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const DeleteTransactionFn = async (transactionId: number) => {
  await instance.delete(`/transactions/transaction/${transactionId}`);
};

export const useDeleteTransactionsMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: DeleteTransactionFn,
    onSuccess: () => {
      queryClient.invalidateQueries(["transactions"]);
    },
  });
};
