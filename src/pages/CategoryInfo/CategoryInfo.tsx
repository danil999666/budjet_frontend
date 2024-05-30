import { FC } from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import { useCategoryInfoQuery } from '../../services/useCategoryInfoQuery.ts'

const CategoryInfo: FC = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const {
		data: category,
		isLoading,
		isError,
	} = useCategoryInfoQuery({ id: Number(id) })

	if (isLoading) return <div>Loading...</div>
	if (isError) return <div>Error fetching data</div>

	const handleBackClick = () => {
		navigate('/categories')
	}

	const handleTransactionClick = (transactionId: any) => {
		navigate(`/transactions/transaction/${transactionId}`)
	}

	return (
		<>
			{category && (
				<div className='max-w-2xl mx-auto rounded-lg shadow-lg bg-slate-800 dark:bg-slate-300 p-6 mt-4'>
					<h2 className='text-xl font-bold mb-4 text-center text-white dark:text-black'>
						Category Details
					</h2>
					<p className='mb-2 text-white dark:text-black'>
						<span className='font-bold'>Title:</span> {category.category.title}
					</p>
					{category.category.description && (
						<p className='mb-2 text-white dark:text-black'>
							<span className='font-bold'>Description:</span>{' '}
							{category.category.description}
						</p>
					)}
					{category.category.transactions?.length > 0 && (
						<div className='overflow-x-auto'>
							<table className='min-w-full bg-slate-800 text-white'>
								<thead className='bg-slate-900 dark:bg-slate-400'>
									<tr>
										<th className='py-2 px-4 border border-slate-600 text-white dark:text-black'>
											Title
										</th>
										<th className='py-2 px-4 border border-slate-600 text-white dark:text-black'>
											Amount
										</th>
										<th className='py-2 px-4 border border-slate-600 text-white dark:text-black'>
											Type
										</th>
										<th className='py-2 px-4 border border-slate-600 text-white dark:text-black'>
											Description
										</th>
										<th className='py-2 px-4 border border-slate-600 text-white dark:text-black'>
											Action
										</th>
									</tr>
								</thead>
								<tbody>
									{category.category.transactions.map((item, index) => (
										<tr key={index} className='bg-slate-900 dark:bg-slate-400'>
											<td className='py-2 px-4 border border-slate-600 text-white dark:text-black normal-case'>
												{item.title}
											</td>
											<td className='py-2 px-4 border border-slate-600 text-white dark:text-black normal-case'>
												{item.amount}
											</td>
											<td className='py-2 px-4 border border-slate-600 text-white dark:text-black normal-case'>
												{item.type}
											</td>
											<td className='py-2 px-4 border border-slate-600 text-white dark:text-black normal-case'>
												{item.description}
											</td>
											<td className='py-2 px-4 border border-slate-600 text-center'>
												<button
													onClick={() => handleTransactionClick(item.id)}
													className='bg-transparent text-white dark:text-black py-1 px-2 rounded'
												>
													<FaInfoCircle size={20} />
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)}
					<button
						onClick={handleBackClick}
						className='w-full bg-blue-600 hover:bg-blue-800 text-white dark:text-black py-2 px-4 rounded dark:bg-green-600 dark:hover:bg-green-800 mt-4'
					>
						Back to Categories
					</button>
				</div>
			)}
		</>
	)
}

export default CategoryInfo
