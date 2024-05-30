import { useCallback, useState } from 'react'
import { fetchExchangeRates } from '../services/exchangeRates'

export const useExchangeRates = () => {
	const [exchangeRates, setExchangeRates] = useState<{ [key: string]: number }>(
		{}
	)

	const fetchRates = useCallback(async () => {
		try {
			const data = await fetchExchangeRates()
			setExchangeRates(data.rates)
		} catch (error) {
			console.error('Error fetching exchange rates:', error)
		}
	}, [])

	return { exchangeRates, fetchRates }
}
