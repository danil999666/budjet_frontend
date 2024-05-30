import { ICategory } from '../../../types/types'

export interface ITransactionFormFieldsProps {
	categories: ICategory[] | undefined
	convertedAmount: number | string
	setConvertedAmount: (amount: number | string) => void
	setVisibleModal: (visible: boolean) => void
	setIsCurrencyModalOpen: (open: boolean) => void
}

export interface ITransactionFormModalsProps {
	visibleModal: boolean
	setVisibleModal: (visible: boolean) => void
	isCurrencyModalOpen: boolean
	setIsCurrencyModalOpen: (open: boolean) => void
	setConvertedAmount: (amount: number | string) => void
}
