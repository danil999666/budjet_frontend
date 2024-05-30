import { FC } from 'react'
import Chart from '../../components/Chart/Chart.tsx'
import { formatToUsd } from '../../helper/currency.helper.ts'
import TransactionFrom from './components/TransactionForm/TransactionForm.tsx'
import TransactionTable from './components/TransactionTable/TransactionTable.tsx'
import { useTransactionDataQuery } from './services/useTransactionDataQuery.ts'

const Transactions: FC = () => {
	const { data, isLoading, isError } = useTransactionDataQuery()

	if (isLoading) return <div>Loading...</div>
	if (isError) return <div>Error fetching data</div>

	const { totalIncome, totalExpense } = data!
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
