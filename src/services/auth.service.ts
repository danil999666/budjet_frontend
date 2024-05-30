import { toast } from 'react-toastify'
import { IResponseUserData, IUser, IUserData } from '../types/types'
import { instance } from './axios.api.ts'

export const AuthService = {
	async registration(
		userData: IUserData
	): Promise<IResponseUserData | undefined> {
		try {
			const { data } = await instance.post<IResponseUserData>('user', userData)
			return data
		} catch (err: any) {
			const error = err.response?.data.message
			toast.error(error.toString())
		}
	},
	async login(userData: IUserData): Promise<IUser | undefined> {
		try {
			const { data } = await instance.post<IUser>('auth/login', userData)
			return data
		} catch (err: any) {
			toast.error('User/password are incorrect!')
			return
		}
	},
	async getProfile(): Promise<IUser | undefined> {
		const { data } = await instance.get<IUser>('auth/profile')

		if (data) return data
	},
}
