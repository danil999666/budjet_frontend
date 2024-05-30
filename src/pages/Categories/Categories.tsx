import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import CategoryModal from '../../components/CategoryModal/CategoryModal.tsx'
import { useCategoriesQuery } from '../../services/useCategoriesQuery.ts'
import { useDeleteCategoryMutation } from '../../services/useDeleteCategoryMutation.ts'
import AddCategoryButton from './components/AddCategoryButton/AddCategoryButton.tsx'
import CategoryList from './components/CategoryList/CategoryList.tsx'

const Categories: FC = () => {
	const { data: categories } = useCategoriesQuery()
	const deleteCategory = useDeleteCategoryMutation()
	const navigate = useNavigate()

	const [categoryId, setCategoryId] = useState<number>(0)
	const [initialTitle, setInitialTitle] = useState<string>('')
	const [initialDescription, setInitialDescription] = useState<string>('')
	const [isEdit, setIsEdit] = useState<boolean>(false)
	const [visibleModal, setVisibleModal] = useState<boolean>(false)

	const handleDelete = (id: number) => {
		deleteCategory.mutate(id, {
			onSuccess: () => {
				toast.success('Category deleted successfully!', {
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
				toast.error('Failed to delete category.', {
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

	const handleViewCategory = (id: number) => {
		navigate(`/categories/category/${id}`)
	}

	const handleEdit = (category: {
		id: number
		title: string
		description: string
	}) => {
		setCategoryId(category.id)
		setInitialTitle(category.title)
		setInitialDescription(category.description)
		setVisibleModal(true)
		setIsEdit(true)
	}

	return (
		<>
			<div className='mt-10 p-4 rounded-md bg-slate-800 dark:bg-slate-300'>
				<h1>Your category list</h1>
				<CategoryList
					categories={categories}
					onEdit={handleEdit}
					onDelete={handleDelete}
					onView={handleViewCategory}
				/>
				<AddCategoryButton
					onClick={() => {
						setVisibleModal(true)
						setIsEdit(false)
						setInitialTitle('')
						setInitialDescription('')
					}}
				/>
			</div>
			{visibleModal && !isEdit && (
				<CategoryModal type='post' setVisibleModal={setVisibleModal} />
			)}
			{visibleModal && isEdit && (
				<CategoryModal
					type='patch'
					id={categoryId}
					setVisibleModal={setVisibleModal}
					initialTitle={initialTitle}
					initialDescription={initialDescription}
				/>
			)}
			<ToastContainer />
		</>
	)
}

export default Categories
