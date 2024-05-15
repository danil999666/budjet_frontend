import { FC } from 'react'
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
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

export const transactinLoader = async ({ params }: LoaderFunctionArgs) => {
	console.log('Loader params:', params) // Проверка параметров

	const { id } = params
	if (!id) {
		throw new Error('ID параметр отсутствует')
	}

	try {
		const categories = await instance.get<ICategory[]>('/categories')
		console.log('Categories:', categories.data)

		const transactionResponse = await instance.get<ITransaction>(
			`/transactions/transaction/${id}`
		)
		console.log('Transaction response:', transactionResponse.data)

		const transactions = await instance.get<ITransaction[]>('/transactions')
		console.log('Transactions:', transactions.data)

		const totalIncome = await instance.get<number>('/transactions/income/find')
		console.log('Total Income:', totalIncome.data)

		const totalExpense = await instance.get<number>(
			'/transactions/expense/find'
		)
		console.log('Total Expense:', totalExpense.data)

		const data: IResponseTransactionLoader = {
			categories: categories.data,
			transactions: transactions.data,
			totalIncome: totalIncome.data,
			totalExpense: totalExpense.data,
			transaction: transactionResponse.data, // Убедитесь, что это поле существует и заполняется
		}
		console.log('Loader data:', data) // Отладочная информация
		return data
	} catch (error) {
		console.error('Error fetching transaction data:', error)
		throw new Error('Ошибка при загрузке данных транзакции')
	}
}

const TransactionInfo: FC = () => {
	const loaderData = useLoaderData() as IResponseTransactionLoader
	const { totalExpense, totalIncome, transaction } = loaderData

	console.log('Loader data:', loaderData) // Отладочная информация
	console.log('Transaction:', transaction) // Отладочная информация

	return (
		<>
			<div className='grid grid-cols-3 gap-4 mt-4 items-start'>
				{/* Add transaction form */}
				<div className='grid col-span-2'>
					<TransactionFrom />
				</div>
				{/* Statistic blocks */}
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

			{/* Transactions Table */}
			<h1 className='my-5'>
				<TransactionTable limit={5} />
			</h1>

			{/* Transaction Details */}
			{transaction && (
				<div className='mt-4'>
					<h2>Transaction Details</h2>
					<p>Title: {transaction.title}</p>
					<p>Amount: {transaction.amount}</p>
					<p>Type: {transaction.type}</p>
				</div>
			)}
		</>
	)
}

export default TransactionInfo
