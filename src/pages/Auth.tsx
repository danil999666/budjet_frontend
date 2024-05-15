import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { setTokenToLocalStorage } from '../helper/localstorage.helper'
import { AuthService } from '../services/auth.service'
import { useAppDispatch } from '../store/hooks'
import { login } from '../store/user/userSlice'

const Auth: FC = () => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [isLogin, setIsLogin] = useState<boolean>(false)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault()
			const data = await AuthService.login({ email, password })

			if (data) {
				setTokenToLocalStorage('token', data.token)
				dispatch(login(data))
				toast.success('You entry!')
				navigate('/')
			}
		} catch (err: any) {
			const error = err.response?.data.message
			toast.error(error.toString())
		}
	}

	const registrationHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault()
			const data = await AuthService.registration({ email, password })
			if (data) {
				toast.success('Account has been created')
				setIsLogin(!isLogin)
			}
		} catch (err: any) {
			const error = err.response?.data.message
			toast.error(error.toString())
		}
	}

	return (
		<div className='mt-40 flex flex-col justify-center items-center bg-slate-900 dark:bg-slate-400 text-white dark:text-black'>
			<h1 className='text-center text-xl mb-10'>
				{isLogin ? 'Login' : 'Registration'}
			</h1>

			<form
				onSubmit={isLogin ? loginHandler : registrationHandler}
				className='flex w-1/3 flex-col mx-auto gap-5'
			>
				<input
					type='text'
					className='input dark:border-slate-100 dark:bg-slate-100 dark:text-black dark:placeholder:text-black'
					placeholder='Email'
					onChange={e => setEmail(e.target.value)}
				/>
				<input
					type='password'
					className='input dark:border-slate-100 dark:bg-slate-100 dark:text-black dark:placeholder:text-black'
					placeholder='Password'
					onChange={e => setPassword(e.target.value)}
				/>

				<button className='btn bg-green-600 dark:bg-blue-600 hover:bg-green-800 dark:hover:bg-blue-800 mx-auto'>
					Submit
				</button>
			</form>

			<div className='flex justify-center mt-5'>
				{isLogin ? (
					<button
						onClick={() => setIsLogin(!isLogin)}
						className='text-slate-300 dark:text-slate-600 hover:text-white dark:hover:text-black'
					>
						You don`t have an account?
					</button>
				) : (
					<button
						onClick={() => setIsLogin(!isLogin)}
						className='text-slate-300 dark:text-slate-600 hover:text-white dark:hover:text-black'
					>
						Already have an account?
					</button>
				)}
			</div>
		</div>
	)
}

export default Auth
