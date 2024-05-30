import { useMutation, useQueryClient } from '@tanstack/react-query'
import { instance } from './axios.api.ts'

const UpdateCategoryFn = async ({
	id,
	title,
	description,
}: {
	id: number
	title: string
	description: string
}) => {
	await instance.patch(`/categories/category/${id}`, { title, description })
}

export const useUpdateCategoryMutation = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: UpdateCategoryFn,
		onSuccess: () => {
			queryClient.invalidateQueries(['categories'])
		},
	})
}
