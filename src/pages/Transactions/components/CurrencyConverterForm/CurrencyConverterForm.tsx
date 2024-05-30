import { FC, useEffect, useState } from 'react'
import { useExchangeRates } from '../../hooks/useExchangeRates'
import { ICurrencyConverterFormProps } from '../../types/CurrenceConverter.types'

const CurrencyConverterModal: FC<ICurrencyConverterFormProps> = ({
	setVisibleModal,
	setParentAmount,
}) => {
	const { exchangeRates, fetchRates } = useExchangeRates()
	const [currency, setCurrency] = useState<string>('EUR')
	const [amount, setAmount] = useState<number | string>('')
	const [convertedAmount, setConvertedAmount] = useState<number | string>('')
	const [roundedAmount, setRoundedAmount] = useState<number | string>('')

	useEffect(() => {
		fetchRates()
	}, [fetchRates])

	const handleCurrencyChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setCurrency(event.target.value)
	}

	const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAmount(event.target.value)
	}

	const handleConvertCurrency = () => {
		const rate = exchangeRates[currency]
		const converted = +amount / rate
		const rounded = converted.toFixed(2)
		setConvertedAmount(converted)
		setRoundedAmount(rounded)
		setParentAmount(Number(rounded))
	}

	return (
		<div className='fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black/50 dark:bg-white/50 flex justify-center items-center'>
			<form className='grid gap-2 w-[300px] p-5 rounded-md bg-slate-900 dark:bg-slate-400'>
				<label className='grid mb-2' htmlFor='currency'>
					<span className='text-sm'>Currency</span>
					<select
						className='input border-slate-700 dark:border-slate-100 dark:bg-slate-100 dark:text-black dark:placeholder:text-black text-sm p-1'
						value={currency}
						onChange={handleCurrencyChange}
					>
						<option value='EUR'>Euro (EUR)</option>
						<option value='UAH'>Hryvnia (UAH)</option>
						<option value='GBP'>Pound (GBP)</option>
						<option value='JPY'>Yen (JPY)</option>
						<option value='USD'>Dollar (USD)</option>
					</select>
				</label>
				<label className='grid mb-2' htmlFor='originalAmount'>
					<span className='text-sm'>Original Amount</span>
					<input
						type='number'
						className='input border-slate-700 dark:border-slate-100 dark:bg-slate-100 dark:text-black dark:placeholder:text-black text-sm p-1'
						placeholder='Amount...'
						value={amount}
						onChange={handleAmountChange}
					/>
				</label>
				<button
					type='button'
					onClick={handleConvertCurrency}
					className='btn bg-blue-600 hover:bg-blue-800 dark:bg-green-600 dark:hover:bg-green-800 text-sm p-1 mb-2'
				>
					Convert
				</button>
				{convertedAmount && (
					<label className='grid' htmlFor='convertedAmount'>
						<span className='text-sm'>Converted Amount (unrounded)</span>
						<input
							type='text'
							className='input border-slate-700 dark:border-slate-100 dark:bg-slate-100 dark:text-black dark:placeholder:text-black text-sm p-1'
							placeholder='Converted Amount...'
							value={convertedAmount}
							readOnly
						/>
					</label>
				)}
				<label className='grid' htmlFor='roundedAmount'>
					<span className='text-sm'>Rounded Amount (USD)</span>
					<input
						type='number'
						className='input border-slate-700 dark:border-slate-100 dark:bg-slate-100 dark:text-black dark:placeholder:text-black text-sm p-1'
						placeholder='Rounded Amount...'
						value={roundedAmount}
						readOnly
					/>
				</label>
				<div className='flex items-center gap-2'>
					<button
						type='button'
						onClick={() => setVisibleModal(false)}
						className='btn bg-red-600 dark:bg-orange-600 hover:bg-red-800 dark:hover:bg-orange-800 disabled:bg-gray-400 disabled:not-allowed disabled:hover:bg-gray-400'
					>
						Close
					</button>
				</div>
			</form>
		</div>
	)
}

export default CurrencyConverterModal
