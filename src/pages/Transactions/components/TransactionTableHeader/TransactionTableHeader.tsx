import { FC } from 'react'
import {
	ITransactionTableHeaderProps,
	SortField,
} from '../../../../types/types'

const TransactionTableHeader: FC<ITransactionTableHeaderProps> = ({
	sortField,
	sortOrder,
	filterMode,
	selectedCategory,
	categories,
	onSort,
	onFilterToggle,
	onCategoryChange,
}) => {
	const renderSortIcon = (field: SortField) => {
		if (sortField === field) {
			return sortOrder === 'asc' ? '▲' : '▼'
		}
		return '↕'
	}

	return (
		<thead>
			<tr>
				<td
					className='font-bold dark:text-black cursor-pointer hover:text-blue-500 dark:hover:text-green-500'
					onClick={() => onSort('title')}
				>
					Title {renderSortIcon('title')}
				</td>
				<td className='font-bold dark:text-black cursor-pointer'>
					<div className='flex items-center'>
						<span
							className='cursor-pointer hover:text-blue-500 dark:hover:text-green-500'
							onClick={() => onSort('amount')}
						>
							Amount ($) {renderSortIcon('amount')}
						</span>
						<button
							className='ml-2 bg-gray-600 text-white px-2 py-1 rounded dark:bg-slate-400 dark:text-black'
							onClick={onFilterToggle}
						>
							{filterMode === 'all'
								? 'All'
								: filterMode === 'income'
									? '+'
									: '-'}
						</button>
					</div>
				</td>
				<td className='font-bold dark:text-black'>
					Category
					<select
						className='ml-2 bg-gray-600 text-white px-2 py-1 rounded dark:bg-slate-400 dark:text-black cursor-pointer hover:bg-gray-500 appearance-none dark:hover:bg-gray-200'
						value={selectedCategory}
						onChange={onCategoryChange}
					>
						{categories.map((category, idx) => (
							<option key={idx} value={category}>
								{category}
							</option>
						))}
					</select>
				</td>
				<td
					className='font-bold dark:text-black cursor-pointer hover:text-blue-500 dark:hover:text-green-500'
					onClick={() => onSort('createdAt')}
				>
					Date {renderSortIcon('createdAt')}
				</td>
				<td className='text-center dark:text-black'>Action</td>
			</tr>
		</thead>
	)
}

export default TransactionTableHeader
