import { FC, useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import ReactPaginate from 'react-paginate'
import { Form, useLoaderData } from 'react-router-dom'
import { instance } from '../api/axios.api'
import { formatToUsd } from '../helper/currency.helper'
import { formatDate } from '../helper/date.helper'
import { IResponseTransactionLoader, ITransaction } from '../types/types'

interface ITransactionTable {
	limit: number
}

const TransactionTable: FC<ITransactionTable> = ({ limit = 3 }) => {
	const { transactions } = useLoaderData() as IResponseTransactionLoader

	const [data, setData] = useState<ITransaction[]>([])
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [totalPages, setTotalPages] = useState<number>(0)

	const fetchTransactions = async (page: number) => {
		const response = await instance.get(
			`/transactions/pagination?page=${page}&limit=${limit}`
		)
		setData(response.data)
		setTotalPages(Math.ceil(transactions.length / limit))
	}

	const handlePageChange = (selectedItem: { selected: number }) => {
		setCurrentPage(selectedItem.selected + 1)
	}

	useEffect(() => {
		fetchTransactions(currentPage)
	}, [currentPage, transactions])

	return (
		<>
			<ReactPaginate
				className='flex gap-3 justify-end mt-4 items-center'
				activeClassName='bg-blue-600 rounded-sm dark:bg-yellow-600'
				pageLinkClassName='text-white dark:text-black text-xs py-1 px-2 rounded-sm'
				previousClassName='text-white dark:text-black py-1 px-2 bg-slate-800 dark:bg-slate-100 rounded-sm text-xs'
				nextClassName='text-white dark:text-black py-1 px-2 bg-slate-800 dark:bg-slate-100 rounded-sm text-xs'
				disabledClassName='text-white/50 dark:text-black/50 cursor-not-allowed'
				disabledLinkClassName='text-slate-600 dark:text-slate-300 cursor-not-allowed'
				pageCount={totalPages}
				pageRangeDisplayed={1}
				marginPagesDisplayed={2}
				onPageChange={handlePageChange}
			/>
			<div className='bg-slate-800 dark:bg-slate-300 px-4 py-3 mt-4 rounded-md'>
				<table className='w-full'>
					<thead>
						<tr>
							<td className='font-bold dark:text-black'>№</td>
							<td className='font-bold dark:text-black'>Title</td>
							<td className='font-bold dark:text-black'>Amount ($)</td>
							<td className='font-bold dark:text-black'>Category</td>
							<td className='font-bold dark:text-black'>Data</td>
							<td className='text-right dark:text-black'>Action</td>
						</tr>
					</thead>
					<tbody>
						{data.map((transaction, idx) => (
							<tr key={idx}>
								<td className='text-white/70 dark:text-black/70 normal-case'>
									{idx + 1}
								</td>
								<td className='text-white/70 dark:text-black/70 normal-case'>
									{transaction.title}
								</td>
								<td
									className={
										transaction.type === 'income'
											? 'text-green-500 dark:text-blue-500'
											: 'text-red-500 dark:text-orange-500'
									}
									dark:text-bla
								>
									{transaction.type === 'income'
										? `+ ${formatToUsd.format(transaction.amount)}`
										: `- ${formatToUsd.format(transaction.amount)}`}
								</td>
								<td className='text-white/70 dark:text-black/70 normal-case'>
									{transaction.category?.title || 'Other'}
								</td>
								<td className='text-white/70 dark:text-black/70 normal-case'>
									{formatDate(transaction.createdAt)}
								</td>
								<td>
									<Form method='delete' action='/transactions'>
										<input type='hidden' name='id' value={transaction.id} />
										<button className='btn hover:bg-red-500 dark:hover:bg-orange-500 ml-auto'>
											<FaTrash />
										</button>
									</Form>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default TransactionTable
