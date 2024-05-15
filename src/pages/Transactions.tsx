import { FC } from 'react'
import { useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify'
import { instance } from '../api/axios.api'
import Chart from '../components/Chart'
import TransactionFrom from '../components/TransactionFrom'
import TransactionTable from '../components/TransactionTable'
import { formatToUsd } from '../helper/currency.helper'
import {
	ICategory,
	IResponseTransactionLoader,
	ITransaction,
} from '../types/types'

export const transactinLoader = async () => {
	const categories = await instance.get<ICategory>('/categories')
	const transactions = await instance.get<ITransaction[]>('/transactions')
	const totalIncome = await instance.get<number>('/transactions/income/find')
	const totalExpense = await instance.get<number>('/transactions/expense/find')

	const data = {
		categories: categories.data,
		transactions: transactions.data,
		totalIncome: totalIncome.data,
		totalExpense: totalExpense.data,
	}
	return data
}

export const transactinAction = async ({ request }: any) => {
	switch (request.method) {
		case 'POST': {
			const formData = await request.formData()
			const newTransaction = {
				title: formData.get('title'),
				amount: +formData.get('amount'),
				category: formData.get('category'),
				type: formData.get('type'),
			}

			await instance.post('/transactions', newTransaction)
			toast.success('Transaction added')
			return null
		}
		case 'DELETE': {
			const formData = await request.formData()
			const transactionId = formData.get('id')
			await instance.delete(`/transactions/transaction/${transactionId}`)
			toast.success('Transaction deleted')
			return null
		}
	}
}

const Transactions: FC = () => {
	const { totalExpense, totalIncome } =
		useLoaderData() as IResponseTransactionLoader
	return (
		<>
			<div className='grid grid-cols-3 gap-4 mt-4 items-start'>
				{/* Add tranction form */}
				<div className='grid col-span-2'>
					<TransactionFrom />
				</div>
				{/* Staristic blocks */}
				<div className='rounded-md bg-slate-800 dark:bg-slate-300 p-3'>
					<div className='grid grid-cols-2 gap-3'>
						<div>
							<p className='flex uppercase text-md font-bold text-center'>
								Total Income:
							</p>
							<p className='bg-green-600 dark:bg-blue-600 p-1 rounded-sm text-center mt-2'>
								{formatToUsd.format(totalIncome)}
							</p>
						</div>
						<div>
							<p className='flex uppercase text-md font-bold text-center'>
								Total Expense:
							</p>
							<p className='bg-red-500 dark:bg-orange-500 p-1 rounded-sm text-center mt-2'>
								{formatToUsd.format(totalExpense)}
							</p>
						</div>
					</div>

					<>
						<Chart totalExpense={totalExpense} totalIncome={totalIncome} />
					</>
				</div>
			</div>

			{/* Transactins Table */}
			<h1 className='my-5'>
				<TransactionTable limit={5} />
			</h1>
		</>
	)
}

export default Transactions