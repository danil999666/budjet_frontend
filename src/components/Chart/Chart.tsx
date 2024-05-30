import { FC, useEffect, useState } from 'react'
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts'

interface IChart {
	totalIncome: number
	totalExpense: number
}

interface IData {
	value: number
	name: string
}

const Chart: FC<IChart> = ({ totalExpense, totalIncome }) => {
	const data = new Array<IData>(
		{ value: totalIncome, name: 'Income' },
		{ value: totalExpense, name: 'Expense' }
	)

	const [colors, setColors] = useState(['#00C49F', '#FF8042'])

	useEffect(() => {
		const handleThemeChange = () => {
			const currentTheme = document.body.classList.contains('dark')
				? 'dark'
				: 'light'
			if (currentTheme === 'dark') {
				setColors(['#2c2cfd', '#FF8042'])
			} else {
				setColors(['#00C49F', '#fc3a3a'])
			}
		}

		handleThemeChange()

		const observer = new MutationObserver(handleThemeChange)
		observer.observe(document.body, {
			attributes: true,
			attributeFilter: ['class'],
		})

		return () => {
			observer.disconnect()
		}
	}, [])

	return (
		<PieChart width={240} height={240}>
			<Pie
				data={data}
				cx={'50%'}
				cy={'50%'}
				innerRadius={60}
				outerRadius={80}
				fill='#8884d8'
				paddingAngle={2}
				dataKey='value'
			>
				{data.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
				))}
			</Pie>
			<Legend />
			<Tooltip />
		</PieChart>
	)
}

export default Chart
