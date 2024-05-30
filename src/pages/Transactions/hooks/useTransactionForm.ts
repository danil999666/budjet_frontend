import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { useAddTransactionsMutation } from '../../../services/useAddTransactionsMutation'
import { useCategoriesQuery } from '../../../services/useCategoriesQuery'

export const useTransactionForm = () => {
	const { data: categories } = useCategoriesQuery()
	const [visibleModal, setVisibleModal] = useState(false)
	const [isCurrencyModalOpen, setIsCurrencyModalOpen] = useState(false)
	const [convertedAmount, setConvertedAmount] = useState<number | string>('')
	const addTransaction = useAddTransactionsMutation()

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const data = {
			title: formData.get('title') as string,
			amount: +formData.get('amount')!,
			category: formData.get('category') as string,
			type: formData.get('type') as string,
			description: formData.get('description') as string,
		}
		try {
			await addTransaction.mutateAsync(data)
			setVisibleModal(false)
			toast.success('Transaction created successfully!', {
				position: 'bottom-left',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			})
		} catch (error) {
			console.error('Error adding transaction:', error)
			toast.error('Failed to create transaction.', {
				position: 'bottom-left',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			})
		}
	}

	return {
		categories,
		visibleModal,
		setVisibleModal,
		isCurrencyModalOpen,
		setIsCurrencyModalOpen,
		convertedAmount,
		setConvertedAmount,
		handleSubmit,
	}
}
