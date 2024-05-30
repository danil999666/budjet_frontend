import { FC } from 'react'
import ReactPaginate from 'react-paginate'
import { IPaginationProps } from '../../../../types/types'

const Pagination: FC<IPaginationProps> = ({
	totalPages,
	currentPage,
	onPageChange,
}) => (
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
		onPageChange={onPageChange}
		forcePage={currentPage - 1}
	/>
)

export default Pagination
