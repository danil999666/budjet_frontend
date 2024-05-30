import { FC, useState } from 'react'
import { useCategoryHandlers } from '../../hooks/useCategoryHandlers'
import { ICategoryFormProps } from '../../types/CategoryModal.types'

const CategoryForm: FC<ICategoryFormProps> = ({
	type,
	id,
	setVisibleModal,
	initialTitle = '',
	initialDescription = '',
}) => {
	const { handleAddCategory, handleUpdateCategory } =
		useCategoryHandlers(setVisibleModal)
	const [title, setTitle] = useState(initialTitle)
	const [description, setDescription] = useState(initialDescription)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		if (type === 'post') {
			handleAddCategory({ title, description })
		} else if (type === 'patch' && id) {
			handleUpdateCategory({ id, title, description })
		}
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='grid gap-2 w-[300px] p-5 rounded-md bg-slate-900 dark:bg-slate-400'
		>
			<label htmlFor='title'>
				<small>Category Title</small>
				<input
					className='input w-full dark:border-slate-100 dark:bg-slate-100 dark:text-black dark:placeholder:text-black'
					type='text'
					name='title'
					value={title}
					onChange={e => setTitle(e.target.value)}
					placeholder='Title....'
					required
				/>
			</label>
			<label htmlFor='description'>
				<small>Category Description</small>
				<input
					className='input w-full dark:border-slate-100 dark:bg-slate-100 dark:text-black dark:placeholder:text-black'
					type='text'
					name='description'
					value={description}
					onChange={e => setDescription(e.target.value)}
					placeholder='Description....(optional)'
				/>
			</label>

			<div className='flex items-center gap-2'>
				<button
					type='submit'
					className='btn bg-green-600 hover:bg-green-800 dark:bg-blue-600 dark:hover:bg-blue-800 disabled:bg-gray-400 disabled:not-allowed disabled:hover:bg-gray-400'
				>
					{type === 'patch' ? 'Save' : 'Create'}
				</button>
				<button
					type='button'
					onClick={() => setVisibleModal(false)}
					className='btn bg-red-600 dark:bg-orange-600 hover:bg-red-800 dark:hover:bg-orange-800 disabled:bg-gray-400 disabled:not-allowed disabled:hover:bg-gray-400'
				>
					Close
				</button>
			</div>
		</form>
	)
}

export default CategoryForm
