import { FC } from 'react'
import { Form } from 'react-router-dom'

interface ICategoryModal {
	type: 'post' | 'patch'
	id?: number
	setVisibleModal: (visible: boolean) => void
}

export const CategoryModal: FC<ICategoryModal> = ({
	type,
	id,
	setVisibleModal,
}) => {
	return (
		<div className='fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black/50 dark:bg-white/50 flex justify-center items-center'>
			<Form
				action='/categories'
				method={type}
				onSubmit={() => setVisibleModal(false)}
				className='grid gap-2 w-[300px] p-5 rounded-md bg-slate-900 dark:bg-slate-400'
			>
				<label htmlFor='title'>
					<small>Category Title</small>
					<input
						className='input w-full dark:border-slate-100 dark:bg-slate-100 dark:text-black dark:placeholder:text-black'
						type='text'
						name='title'
						placeholder='Title....'
					/>
					<input type='hidden' name='id' value={id} />
				</label>

				<div className='flex items-center gap-2'>
					<button
						type='submit'
						className='btn bg-green-600 hover:bg-green-800
                    dark:bg-blue-600 dark:hover:bg-blue-800 disabled:bg-gray-400 disabled:not-allowed disabled:hover:bg-gray-400'
					>
						{type === 'patch' ? 'Save' : 'Create'}
					</button>
					<button
						onClick={() => setVisibleModal(false)}
						className='btn bg-red-600 dark:bg-orange-600 hover:bg-red-800 dark:hover:bg-orange-800 disabled:bg-gray-400 disabled:not-allowed disabled:hover:bg-gray-400'
					>
						Close
					</button>
				</div>
			</Form>
		</div>
	)
}

export default CategoryModal
