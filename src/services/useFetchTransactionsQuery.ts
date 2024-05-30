import { useQuery } from '@tanstack/react-query'
import { instance } from './axios.api.ts'

const FetchTransactionsFn = async ({
	page,
	limit,
}: {
	page: number
	limit: number
}) => {
	const response = await instance.get(
		`/transactions/pagination?page=${page}&limit=${limit}`
	)
	return response.data
}

export const useFetchTransactionsQuery = ({
	page,
	limit,
}: {
	page: number
	limit: number
}) => {
	return useQuery({
		queryKey: ['categories', { page, limit }],
		queryFn: () => FetchTransactionsFn({ page, limit }),
		refetchOnWindowFocus: false,
	})
}
