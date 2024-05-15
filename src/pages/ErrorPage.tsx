import { FC } from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/44-incredible-404-error-pages@3x-1560x760.png'

const ErrorPage: FC = () => {
	return (
		<div className='min-h-screen bg-slate-900 dark:bg-slate-400 font-roboto text-white flex justify-center items-center flex-col gap-10'>
			<img src={img} alt='img' className='w-80' />
			<Link
				to={'/'}
				className='bg-sky-500 rounded-md px-6 py-2 hover:bg-sky-600'
			>
				Back
			</Link>
		</div>
	)
}

export default ErrorPage
