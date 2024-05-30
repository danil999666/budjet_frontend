export const fetchExchangeRates = async () => {
	const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD')
	if (!response.ok) {
		throw new Error('Failed to fetch exchange rates')
	}
	return response.json()
}
