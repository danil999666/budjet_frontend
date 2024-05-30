import { FC } from 'react'
import CurrencyConverterForm from '../../pages/Transactions/components/CurrencyConverterForm/CurrencyConverterForm'
import { ICurrencyConverterModal } from '../../pages/Transactions/types/CurrenceConverter.types'

const CurrencyConverterModal: FC<ICurrencyConverterModal> = ({
	setVisibleModal,
	setParentAmount,
}) => (
	<div className='fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black/50 dark:bg-white/50 flex justify-center items-center'>
		<CurrencyConverterForm
			setVisibleModal={setVisibleModal}
			setParentAmount={setParentAmount}
		/>
	</div>
)

export default CurrencyConverterModal
