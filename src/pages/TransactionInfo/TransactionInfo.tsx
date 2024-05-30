import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { formatToUsd } from '../../helper/currency.helper.ts'
import { useTransactionInfoQuery } from '../../services/useTransactionInfoQuery.ts'

const TransactionInfo: FC = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const {
		data: transaction,
		isLoading,
		isError,
	} = useTransactionInfoQuery({ id })

	if (isLoading) return <div>Loading...</div>
	if (isError) return <div>Error fetching data</div>

	const handleBackClick = () => {
		navigate('/transactions')
	}

	return (
		<>
			{transaction && (
				<div className='max-w-md mx-auto rounded-lg shadow-lg bg-slate-800 dark:bg-slate-300 p-6 mt-4'>
					<h2 className='text-xl font-bold mb-4 text-center'>
						Transaction Details
					</h2>
					<p className='mb-2'>
						<span className='font-bold'>Title:</span>{' '}
						{transaction.transaction.title}
					</p>
					<p className='mb-2'>
						<span className='font-bold'>Amount:</span>{' '}
						{formatToUsd.format(transaction.transaction.amount)}
					</p>
					<p className='mb-2'>
						<span className='font-bold'>Type:</span>{' '}
						{transaction.transaction.type}
					</p>
					<p className='mb-2'>
						<span className='font-bold'>Category:</span>{' '}
						{transaction.transaction.category?.title || 'N/A'}
					</p>
					{transaction.transaction.description && (
						<p className='mb-4'>
							<span className='font-bold'>Description:</span>{' '}
							{transaction.transaction.description}
						</p>
					)}
					<button
						onClick={handleBackClick}
						className='w-full bg-blue-600 hover:bg-blue-800 text-white dark:text-black py-2 px-4 rounded dark:bg-green-600 dark:hover:bg-green-800'
					>
						Back to Transactions
					</button>
				</div>
			)}
		</>
	)
}

export default TransactionInfo
