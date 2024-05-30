import { QueryFunction, useQuery } from '@tanstack/react-query'
import { ICategory, ITransaction } from '../types/types'
import { instance } from './axios.api.ts'

// Define the response structure to match IResponseTransactionLoader
interface IResponseTransactionLoader {
	categories: ICategory[]
	transaction: ITransaction
	transactions?: any // Include all required fields in your type
	totalIncome?: number
	totalExpense?: number
}

const TransactionDataFn: QueryFunction<IResponseTransactionLoader> = async ({
	queryKey,
}) => {
	const id = (queryKey[1] as { id: number }).id
	const categories = await instance.get<ICategory[]>('/categories')
	const transaction = await instance.get<ITransaction>(
		`/transactions/transaction/${id}`
	)

	return {
		categories: categories.data,
		transaction: transaction.data,
		transactions: [], // Placeholder, adjust based on actual data
		totalIncome: 0, // Placeholder, adjust based on actual data
		totalExpense: 0, // Placeholder, adjust based on actual data
	}
}

export const useTransactionInfoQuery = ({ id }: { id: number }) => {
	return useQuery<IResponseTransactionLoader, Error>({
		queryKey: ['transactions', { id }],
		queryFn: TransactionDataFn,
		refetchOnWindowFocus: false,
	})
}
