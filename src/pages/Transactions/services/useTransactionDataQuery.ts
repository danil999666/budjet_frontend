import { instance } from "../../../services/axios.api.ts";
import {
  ICategory,
  IResponseTransactionLoader,
  ITransaction,
} from "../../../types/types.ts";
import { useQuery } from "@tanstack/react-query";

const TransactionDataFn = async () => {
  const categories = await instance.get<ICategory[]>("/categories");
  const transactions = await instance.get<ITransaction[]>("/transactions");
  const totalIncome = await instance.get<number>("/transactions/income/find");
  const totalExpense = await instance.get<number>("/transactions/expense/find");

  return {
    categories: categories.data,
    transactions: transactions.data,
    totalIncome: totalIncome.data,
    totalExpense: totalExpense.data,
    transaction: null,
  };
};

export const useTransactionDataQuery = () => {
  return useQuery<IResponseTransactionLoader>({
    queryKey: ["transactions"],
    queryFn: TransactionDataFn,
    refetchOnWindowFocus: false,
  });
};
