import { createBrowserRouter } from 'react-router-dom'
import { ProtectedRoute } from '../components/ProtectedRoute'
import Auth from '../pages/Auth'
import Categories, {
	categoriesAction,
	categoryLoader,
} from '../pages/Categories'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import Layout from '../pages/Layout'
import TransactionInfo from '../pages/TransactionInfo'
import Transactions, {
	transactinAction,
	transactinLoader,
} from '../pages/Transactions'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'transactions',
				action: transactinAction,
				loader: transactinLoader,
				element: (
					<ProtectedRoute>
						<Transactions />
					</ProtectedRoute>
				),
			},
			{
				path: 'transactions/:id',
				loader: transactinLoader,
				element: <TransactionInfo />,
			},
			{
				path: 'categories',
				action: categoriesAction,
				loader: categoryLoader,
				element: (
					<ProtectedRoute>
						<Categories />
					</ProtectedRoute>
				),
			},
			{
				path: 'auth',
				element: <Auth />,
			},
		],
	},
])

export default router
