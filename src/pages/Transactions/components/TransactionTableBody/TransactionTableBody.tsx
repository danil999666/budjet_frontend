import { FC } from 'react'
import { FaInfoCircle, FaTrash } from 'react-icons/fa'
import { formatToUsd } from '../../../../helper/currency.helper'
import { formatDate } from '../../../../helper/date.helper'
import { ITransactionTableBodyProps } from '../../../../types/types'

const TransactionTableBody: FC<ITransactionTableBodyProps> = ({
	data,
	onDelete,
	onNavigate,
}) => {
	return (
		<tbody>
			{data.length > 0 ? (
				data.map((transaction, idx) => (
					<tr key={idx}>
						<td className='text-white/70 dark:text-black/70 normal-case'>
							{transaction.title}
						</td>
						<td
							className={
								transaction.type === 'income'
									? 'text-green-500 dark:text-blue-500'
									: 'text-red-500 dark:text-orange-500'
							}
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
						<td className='flex justify-between space-x-1'>
							<button
								onClick={() => onDelete(transaction.id)}
								className='btn hover:bg-red-500 dark:hover:bg-orange-500'
							>
								<FaTrash />
							</button>
							<button
								onClick={() => onNavigate(transaction.id)}
								className='btn hover:bg-blue-500 dark:hover:bg-green-500'
							>
								<FaInfoCircle />
							</button>
						</td>
					</tr>
				))
			) : (
				<tr>
					<td
						colSpan={5}
						className='text-center text-white/70 dark:text-black/70 py-4'
					>
						No matching transactions found.
					</td>
				</tr>
			)}
		</tbody>
	)
}

export default TransactionTableBody
