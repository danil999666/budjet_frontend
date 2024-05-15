import { FC, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Form, useLoaderData } from 'react-router-dom'
import { IResponseTransactionLoader } from '../types/types'
import CategoryModal from './CategoryModal'

export const TransactionFrom: FC = () => {
	const { categories } = useLoaderData() as IResponseTransactionLoader
	const [visibleModal, setVisibleModal] = useState(false)

	return (
		<>
			<div className='rounded-md bg-slate-800 dark:bg-slate-300 p-4'>
				<Form className='grid gap-2' method='post' action='/transactions'>
					<label className='grid' htmlFor='title'>
						<span>Title</span>
						<input
							type='text'
							className='input border-slate-700 dark:border-slate-100 dark:bg-slate-100 dark:text-black dark:placeholder:text-black'
							placeholder='Title...'
							name='title'
							required
						/>
					</label>
					<label className='grid' htmlFor='amount'>
						<span>Amount</span>
						<input
							type='number'
							className='input border-slate-700 dark:border-slate-100 dark:bg-slate-100 dark:text-black dark:placeholder:text-black'
							placeholder='Amount...'
							name='amount'
							required
						/>
					</label>

					{/* Select */}
					{categories.length ? (
						<label htmlFor='category' className='grid'>
							<span>Category</span>
							<select
								name='category'
								className='input border-slate-700 dark:border-slate-100 dark:bg-slate-100 dark:text-black dark:placeholder:text-black'
								required
							>
								{categories.map((ctg, idx) => (
									<option key={idx} value={ctg.id}>
										{ctg.title}
									</option>
								))}
							</select>
						</label>
					) : (
						<h1 className='mt-1 text-red-300 dark:text-red-600'>
							To continue create a category first
						</h1>
					)}

					<button
						onClick={() => setVisibleModal(true)}
						className='max-w-fit flex items-center gap-2 text-white/50 hover:text-white dark:text-black/50 dark:hover:text-black'
					>
						<FaPlus />
						<span>Manage Categories</span>
					</button>

					{/* Radio buttons */}
					<div className='flex gap-4 items-center'>
						<label className='cursor-pointer flex items-center gap-2'>
							<input
								type='radio'
								name='type'
								value={'income'}
								className='form-radio text-blue-600 dark:text-yellow-600'
							/>
							<span className='text-white/50 hover:text-white  dark:text-black/50 dark:hover:text-black'>
								Income
							</span>
						</label>
						<label className='cursor-pointer flex items-center gap-2'>
							<input
								type='radio'
								name='type'
								value={'expense'}
								className='form-radio text-blue-600
                                dark:text-yellow-600'
							/>
							<span className='text-white/50 hover:text-white dark:text-black/50 dark:hover:text-black'>
								Expense
							</span>
						</label>
					</div>

					{/* Submit button */}
					<button
						className='btn bg-green-600 hover:bg-green-800
                    dark:bg-blue-600 dark:hover:bg-blue-800 max-w-fit mt-2'
					>
						Submit
					</button>
				</Form>

				{/* Add Transaction Modal */}
				{visibleModal && (
					<CategoryModal type='post' setVisibleModal={setVisibleModal} />
				)}
			</div>
		</>
	)
}

export default TransactionFrom
