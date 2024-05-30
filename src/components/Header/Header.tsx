import { FC } from 'react'
import { FaBtc, FaSignOutAlt } from 'react-icons/fa'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { removeTokenFromLocalStorage } from '../../helper/localstorage.helper.ts'
import { useAuth } from '../../hooks/useAuth.ts'
import { useAppDispatch } from '../../store/hooks.ts'
import { logout } from '../../store/user/userSlice.ts'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch.tsx'

const Header: FC = () => {
	const isAuth = useAuth()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const logoutHandler = () => {
		dispatch(logout())
		removeTokenFromLocalStorage('token')
		toast.success('You logged out')
		navigate('/')
	}

	return (
		<header className='flex items-center p-4 shadow-sm bg-slate-800 dark:bg-slate-300 backdrop-blur-sm'>
			<Link to='/' className='flex gap-2'>
				<FaBtc size={20} />
				<ThemeSwitch />
			</Link>

			{/* Menu */}
			{isAuth && (
				<nav className='ml-auto mr-10'>
					<ul className='flex items-center gap-5 '>
						<li>
							<NavLink
								to={'/'}
								className={({ isActive }) =>
									isActive
										? 'text-white dark:text-black'
										: 'text-white/50 dark:text-black/50'
								}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to={'/transactions'}
								className={({ isActive }) =>
									isActive
										? 'text-white dark:text-black'
										: 'text-white/50 dark:text-black/50'
								}
							>
								Transactions
							</NavLink>
						</li>
						<li>
							<NavLink
								to={'/categories'}
								className={({ isActive }) =>
									isActive
										? 'text-white dark:text-black'
										: 'text-white/50 dark:text-black/50'
								}
							>
								Categories
							</NavLink>
						</li>
					</ul>
				</nav>
			)}

			{/* Actions */}
			{isAuth ? (
				<button
					className='btn bg-red-700 dark:bg-orange-700'
					onClick={logoutHandler}
				>
					<span className='dark:text-grey'>Log out</span>
					<FaSignOutAlt />
				</button>
			) : (
				<Link
					className='py-2 text-white/50 dark:text-black/50 hover:text-white dark:hover:text-black ml-auto'
					to={'auth'}
				>
					Log In / Sign In
				</Link>
			)}
		</header>
	)
}

export default Header
