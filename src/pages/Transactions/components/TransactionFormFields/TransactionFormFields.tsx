import { FC } from 'react'
import { FaPlus } from 'react-icons/fa'
import { ITransactionFormFieldsProps } from '../../types/TransactionForm.types'

const TransactionFormFields: FC<ITransactionFormFieldsProps> = ({
	categories,
	convertedAmount,
	setConvertedAmount,
	setVisibleModal,
	setIsCurrencyModalOpen,
}) => (
	<>
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
			<div className='flex'>
				<input
					type='number'
					className='input border-slate-700 dark:border-slate-100 dark:bg-slate-100 dark:text-black dark:placeholder:text-black flex-grow'
					placeholder='Amount...'
					name='amount'
					value={convertedAmount}
					onChange={e => setConvertedAmount(e.target.value)}
					required
				/>
				<button
					type='button'
					onClick={() => setIsCurrencyModalOpen(true)}
					className='btn bg-blue-600 hover:bg-blue-800 dark:bg-green-600 dark:hover:bg-green-800 text-sm ml-2'
				>
					Convert
				</button>
			</div>
		</label>
		<label className='grid' htmlFor='description'>
			<span>Description</span>
			<input
				type='text'
				className='input border-slate-700 dark:border-slate-100 dark:bg-slate-100 dark:text-black dark:placeholder:text-black'
				placeholder='Description...(optional)'
				name='description'
			/>
		</label>
		{categories?.length ? (
			<label htmlFor='category' className='grid'>
				<span>Category</span>
				<select
					name='category'
					className='input border-slate-700 dark:border-slate-100 dark:bg-slate-100 dark:text-black dark:placeholder:text-black'
					required
				>
					{categories.map(ctg => (
						<option key={ctg.id} value={ctg.id}>
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
			type='button'
			onClick={e => {
				e.preventDefault()
				setVisibleModal(true)
			}}
			className='max-w-fit flex items-center gap-2 text-white/50 hover:text-white dark:text-black/50 dark:hover:text-black'
		>
			<FaPlus />
			<span>Manage Categories</span>
		</button>

		<div className='flex gap-4 items-center'>
			<label className='cursor-pointer flex items-center gap-2'>
				<input
					type='radio'
					name='type'
					value='income'
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
					value='expense'
					className='form-radio text-blue-600 dark:text-yellow-600'
				/>
				<span className='text-white/50 hover:text-white dark:text-black/50 dark:hover:text-black'>
					Expense
				</span>
			</label>
		</div>

		<button
			type='submit'
			className='btn bg-green-600 hover:bg-green-800 dark:bg-blue-600 dark:hover:bg-blue-800 max-w-fit mt-2'
		>
			Submit
		</button>
	</>
)

export default TransactionFormFields
