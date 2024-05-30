import { FC } from 'react'
import { AiFillCloseCircle, AiFillEdit } from 'react-icons/ai'
import { FaCircleInfo } from 'react-icons/fa6'

interface CategoryItemProps {
	category: {
		id: number
		title: string
		description: string
	}
	onEdit: (category: { id: number; title: string; description: string }) => void
	onDelete: (id: number) => void
	onView: (id: number) => void
}

const CategoryItem: FC<CategoryItemProps> = ({
	category,
	onEdit,
	onDelete,
	onView,
}) => (
	<div className='group py-2 px-4 rounded-lg bg-blue-600 dark:bg-orange-600 flex items-center gap-2'>
		<span className='flex-1'>{category.title}</span>
		<div className='flex items-center gap-2'>
			<button
				onClick={() => onEdit(category)}
				className='p-2 rounded-full bg-white/10 hover:bg-white/20 transition'
			>
				<AiFillEdit className='text-white dark:text-black' />
			</button>
			<button
				onClick={() => onView(category.id)}
				className='p-2 rounded-full bg-white/10 hover:bg-white/20 transition'
			>
				<FaCircleInfo className='text-white dark:text-black' />
			</button>
			<button
				onClick={() => onDelete(category.id)}
				className='p-2 rounded-full bg-white/10 hover:bg-white/20 transition'
			>
				<AiFillCloseCircle className='text-white dark:text-black' />
			</button>
		</div>
	</div>
)

export default CategoryItem
