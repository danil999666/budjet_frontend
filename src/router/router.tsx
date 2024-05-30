import { createBrowserRouter } from 'react-router-dom'
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute.tsx'
import Auth from '../pages/Auth/Auth.tsx'
import Categories from '../pages/Categories/Categories.tsx'
import CategoryInfo from '../pages/CategoryInfo/CategoryInfo.tsx'
import ErrorPage from '../pages/ErrorPage/ErrorPage.tsx'
import Home from '../pages/Home/Home.tsx'
import Layout from '../pages/Layout/Layout.tsx'
import TransactionInfo from '../pages/TransactionInfo/TransactionInfo.tsx'
import Transactions from '../pages/Transactions/Transactions.tsx'

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
				element: (
					<ProtectedRoute>
						<Transactions />
					</ProtectedRoute>
				),
			},
			{
				path: 'transactions/transaction/:id',
				element: <TransactionInfo />,
			},
			{
				path: 'categories',
				element: (
					<ProtectedRoute>
						<Categories />
					</ProtectedRoute>
				),
			},
			{
				path: 'categories/category/:id',
				element: <CategoryInfo />,
			},
			{
				path: 'auth',
				element: <Auth />,
			},
		],
	},
])

export default router
