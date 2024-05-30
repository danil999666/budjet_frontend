import { useMutation, useQueryClient } from '@tanstack/react-query'
import { instance } from './axios.api.ts'

const AddCategoryFn = async ({
	title,
	description,
}: {
	title: string
	description: string
}) => {
	await instance.post('/categories', { title, description })
}

export const useAddCategoryMutation = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: AddCategoryFn,
		onSuccess: () => {
			queryClient.invalidateQueries(['categories'])
		},
	})
}
