import { FC } from 'react'
import { Form } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useTransactionForm } from '../../hooks/useTransactionForm'
import TransactionFormFields from '../TransactionFormFields/TransactionFormFields'
import TransactionFormModals from '../TransactionFormModals/TransactionFormModals'

export const TransactionForm: FC = () => {
	const {
		categories,
		visibleModal,
		setVisibleModal,
		isCurrencyModalOpen,
		setIsCurrencyModalOpen,
		convertedAmount,
		setConvertedAmount,
		handleSubmit,
	} = useTransactionForm()

	return (
		<>
			<div className='rounded-md bg-slate-800 dark:bg-slate-300 p-4'>
				<Form className='grid gap-2' onSubmit={handleSubmit}>
					<TransactionFormFields
						categories={categories}
						convertedAmount={convertedAmount}
						setConvertedAmount={setConvertedAmount}
						setVisibleModal={setVisibleModal}
						setIsCurrencyModalOpen={setIsCurrencyModalOpen}
					/>
				</Form>

				<TransactionFormModals
					visibleModal={visibleModal}
					setVisibleModal={setVisibleModal}
					isCurrencyModalOpen={isCurrencyModalOpen}
					setIsCurrencyModalOpen={setIsCurrencyModalOpen}
					setConvertedAmount={setConvertedAmount}
				/>
			</div>
			<ToastContainer />
		</>
	)
}

export default TransactionForm
