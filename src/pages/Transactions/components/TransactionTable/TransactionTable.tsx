import { FC } from 'react'
import { ITransactionTableProps } from '../../../../types/types'
import { useTransactionTable } from '../../hooks/useTransactionTable'
import Notification from '../Notification/Notification'
import Pagination from '../Pagination/Pagination'
import TransactionTableBody from '../TransactionTableBody/TransactionTableBody'
import TransactionTableHeader from '../TransactionTableHeader/TransactionTableHeader'

const TransactionTable: FC<ITransactionTableProps> = ({ limit = 10 }) => {
	const {
		data,
		totalPages,
		currentPage,
		sortField,
		sortOrder,
		filterMode,
		selectedCategory,
		categories,
		notification,
		handleDelete,
		handlePageChange,
		handleSort,
		handleFilterToggle,
		handleCategoryChange,
		handleNavigate,
	} = useTransactionTable(limit)

	return (
		<>
			{notification && <Notification message={notification} />}
			<Pagination
				totalPages={totalPages}
				currentPage={currentPage}
				onPageChange={handlePageChange}
			/>
			<div className='bg-slate-800 dark:bg-slate-300 px-4 py-3 mt-4 rounded-md'>
				<table className='w-full'>
					<TransactionTableHeader
						sortField={sortField}
						sortOrder={sortOrder}
						filterMode={filterMode}
						selectedCategory={selectedCategory}
						categories={categories}
						onSort={handleSort}
						onFilterToggle={handleFilterToggle}
						onCategoryChange={handleCategoryChange}
					/>
					<TransactionTableBody
						data={data}
						onDelete={handleDelete}
						onNavigate={handleNavigate}
					/>
				</table>
			</div>
		</>
	)
}

export default TransactionTable
