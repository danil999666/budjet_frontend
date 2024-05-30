import { FC } from 'react'
import { INotificationProps } from '../../../../types/types'

const Notification: FC<INotificationProps> = ({ message }) => (
	<div className='bg-blue-500 text-white p-2 rounded-md mb-4 dark:bg-green-500'>
		{message}
	</div>
)

export default Notification
