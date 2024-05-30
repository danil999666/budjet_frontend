import { FC } from 'react'
import CategoryModal from '../../../../components/CategoryModal/CategoryModal'
import { ITransactionFormModalsProps } from '../../types/TransactionForm.types'
import CurrencyConverterModal from '../CurrencyConverterForm/CurrencyConverterForm'

const TransactionFormModals: FC<ITransactionFormModalsProps> = ({
	visibleModal,
	setVisibleModal,
	isCurrencyModalOpen,
	setIsCurrencyModalOpen,
	setConvertedAmount,
}) => (
	<>
		{visibleModal && (
			<CategoryModal type='post' setVisibleModal={setVisibleModal} />
		)}

		{isCurrencyModalOpen && (
			<CurrencyConverterModal
				setVisibleModal={setIsCurrencyModalOpen}
				setParentAmount={setConvertedAmount}
			/>
		)}
	</>
)

export default TransactionFormModals
