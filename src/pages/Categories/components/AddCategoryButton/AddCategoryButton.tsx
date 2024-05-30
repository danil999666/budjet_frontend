import { FC } from 'react'
import { FaPlus } from 'react-icons/fa6'

interface AddCategoryButtonProps {
	onClick: () => void
}

const AddCategoryButton: FC<AddCategoryButtonProps> = ({ onClick }) => (
	<button
		onClick={onClick}
		className='max-w-fit flex items-center gap-2 text-white/50 mt-5 hover:text-white dark:text-black/50 dark:hover:text-black'
	>
		<FaPlus />
		<span>Create a new category</span>
	</button>
)

export default AddCategoryButton
