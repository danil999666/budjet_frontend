import { toast } from 'react-toastify'
import { useAddCategoryMutation } from '../../../services/useAddCategoryMutation'
import { useUpdateCategoryMutation } from '../../../services/useUpdateCategoryMutation'

export const useCategoryHandlers = (
	setVisibleModal: (visible: boolean) => void
) => {
	const addCategory = useAddCategoryMutation()
	const updateCategory = useUpdateCategoryMutation()

	const handleAddCategory = (data: { title: string; description: string }) => {
		addCategory.mutate(data, {
			onSuccess: () => {
				setVisibleModal(false)
				toast.success('Category created successfully!', {
					position: 'bottom-left',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				})
			},
			onError: () => {
				toast.error('Failed to create category.', {
					position: 'bottom-left',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				})
			},
		})
	}

	const handleUpdateCategory = (data: {
		id: number
		title: string
		description: string
	}) => {
		updateCategory.mutate(data, {
			onSuccess: () => {
				setVisibleModal(false)
				toast.success('Category updated successfully!', {
					position: 'bottom-left',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				})
			},
			onError: () => {
				toast.error('Failed to update category.', {
					position: 'bottom-left',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				})
			},
		})
	}

	return { handleAddCategory, handleUpdateCategory }
}
