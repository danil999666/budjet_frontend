import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDeleteTransactionsMutation } from '../../../services/useDeleteTransactionsMutation'
import {
	FilterMode,
	ITransaction,
	SortField,
	SortOrder,
} from '../../../types/types'
import { useTransactionDataQuery } from '../services/useTransactionDataQuery'

export const useTransactionTable = (limit: number) => {
	const [data, setData] = useState<ITransaction[]>([])
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [totalPages, setTotalPages] = useState<number>(0)
	const [sortField, setSortField] = useState<SortField>('title')
	const [sortOrder, setSortOrder] = useState<SortOrder>('asc')
	const [filterMode, setFilterMode] = useState<FilterMode>('all')
	const [categories, setCategories] = useState<string[]>([])
	const [selectedCategory, setSelectedCategory] = useState<string>('All')
	const [notification, setNotification] = useState<string | null>(null)
	const [deletionCount, setDeletionCount] = useState<number>(0)

	const mutation = useDeleteTransactionsMutation()
	const navigate = useNavigate()
	const { data: transactions, isLoading, isError } = useTransactionDataQuery()

	const handleDelete = (transactionId: number) => {
		if (notification) {
			setDeletionCount(prevCount => prevCount + 1)
		} else {
			setDeletionCount(1)
		}

		mutation.mutate(transactionId, {
			onSuccess: () => {
				setNotification(
					`Transaction deleted successfully. (${deletionCount + 1})`
				)
				setTimeout(() => {
					setNotification(null)
					setDeletionCount(0)
				}, 3000)
			},
			onError: () => {
				setNotification('Failed to delete transaction.')
				setTimeout(() => {
					setNotification(null)
					setDeletionCount(0)
				}, 3000)
			},
		})
	}

	const handlePageChange = (selectedItem: { selected: number }) => {
		setCurrentPage(selectedItem.selected + 1)
	}

	const handleSort = (field: SortField) => {
		const newSortOrder =
			sortField === field && sortOrder === 'asc' ? 'desc' : 'asc'
		setSortField(field)
		setSortOrder(newSortOrder)
	}

	const handleFilterToggle = () => {
		const newFilterMode: FilterMode =
			filterMode === 'all'
				? 'income'
				: filterMode === 'income'
					? 'expense'
					: 'all'
		setFilterMode(newFilterMode)
	}

	const handleCategoryChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setSelectedCategory(event.target.value)
	}

	const handleNavigate = (transactionId: number) => {
		navigate(`/transactions/transaction/${transactionId}`)
	}

	useEffect(() => {
		if (transactions?.transactions) {
			const categorySet = new Set<string>(
				transactions.transactions.map(
					(transaction: { category: { title: any } }) =>
						transaction.category?.title || 'Other'
				)
			)
			setCategories(['All', ...Array.from(categorySet)])

			const filteredTransactions = transactions.transactions.filter(
				(transaction: ITransaction) => {
					if (
						selectedCategory !== 'All' &&
						transaction.category?.title !== selectedCategory
					) {
						return false
					}
					if (filterMode === 'income') return transaction.type === 'income'
					if (filterMode === 'expense') return transaction.type === 'expense'
					return true
				}
			)

			const sortedData = [...filteredTransactions].sort((a, b) => {
				if (sortField === 'amount') {
					const aAmount = a.amount
					const bAmount = b.amount
					return sortOrder === 'asc' ? aAmount - bAmount : bAmount - aAmount
				}

				const aField = a[sortField]?.toString().toLowerCase() || ''
				const bField = b[sortField]?.toString().toLowerCase() || ''
				if (aField < bField) return sortOrder === 'asc' ? -1 : 1
				if (aField > bField) return sortOrder === 'asc' ? 1 : -1
				return 0
			})

			const startIdx = (currentPage - 1) * limit
			const currentPageData = sortedData.slice(startIdx, startIdx + limit)

			setData(currentPageData)
			setTotalPages(Math.ceil(filteredTransactions.length / limit))
		}
	}, [
		transactions,
		sortField,
		sortOrder,
		currentPage,
		limit,
		filterMode,
		selectedCategory,
	])

	return {
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
		isLoading,
		isError,
	}
}
