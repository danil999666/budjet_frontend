export interface IUser {
	id: number
	email: string
	token: string
}

export interface IUserData {
	email: string
	password: string
}

export interface IResponseUser {
	email: string
	id: number
	createdAt: string
	updatedAt: string
	password: string
}

export interface IResponseUserData {
	token: string
	user: IResponseUser
}

export interface ITransaction {
	amount: number
	createdAt: string
	updatedAt: string
	title: string
	type: string
	description: string
	id: number
	category: ICategory
}

export interface ICategory {
	title: string
	id: number
	description: string
	createdAt: string
	updatedAt: string
	transactions?: []
}

export interface IResponseTransactionLoader {
	categories: ICategory[]
	transactions: ITransaction[]
	totalIncome: number
	totalExpense: number
	transaction: ITransaction | null
}

export type SortOrder = 'asc' | 'desc'
export type SortField = keyof ITransaction
export type FilterMode = 'all' | 'income' | 'expense'

export interface ITransactionTableProps {
	limit: number
}

export interface ITransactionTableHeaderProps {
	sortField: SortField
	sortOrder: SortOrder
	filterMode: FilterMode
	selectedCategory: string
	categories: string[]
	onSort: (field: SortField) => void
	onFilterToggle: () => void
	onCategoryChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export interface ITransactionTableBodyProps {
	data: ITransaction[]
	onDelete: (transactionId: number) => void
	onNavigate: (transactionId: number) => void
}

export interface IPaginationProps {
	totalPages: number
	currentPage: number
	onPageChange: (selectedItem: { selected: number }) => void
}

export interface INotificationProps {
	message: string
}
