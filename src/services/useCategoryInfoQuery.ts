import { QueryFunction, useQuery } from '@tanstack/react-query'
import { ICategory } from '../types/types'
import { instance } from './axios.api.ts'

// Define the response structure to match IResponseTransactionLoader
interface IResponseCategoryLoader {
	category: ICategory
	//transactions: ITransaction[]
}

const CategoryDataFn: QueryFunction<IResponseCategoryLoader> = async ({
	queryKey,
}) => {
	const id = (queryKey[1] as { id: number | undefined }).id
	//const transactions = await instance.get<ITransaction[]>('/transactions')
	const category = await instance.get<ICategory>(`/categories/category/${id}`)

	return {
		category: category.data,
		//transactions: transactions.data,
	}
}

export const useCategoryInfoQuery = ({ id }: { id: number | undefined }) => {
	return useQuery<IResponseCategoryLoader, Error>({
		queryKey: ['category', { id }],
		queryFn: CategoryDataFn,
		refetchOnWindowFocus: false,
	})
}
