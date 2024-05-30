import { FC } from 'react'
import { ICategory } from '../../../../types/types'
import CategoryItem from '../CategoryItem/CategoryItem'

interface CategoryListProps {
	categories: ICategory[] | undefined
	onEdit: (category: { id: number; title: string; description: string }) => void
	onDelete: (id: number) => void
	onView: (id: number) => void
}

const CategoryList: FC<CategoryListProps> = ({
	categories = [],
	onEdit,
	onDelete,
	onView,
}) => (
	<div className='flex mt-2 items-center gap-2 flex-wrap'>
		{categories.map((category, idx) => (
			<CategoryItem
				key={idx}
				category={category}
				onEdit={onEdit}
				onDelete={onDelete}
				onView={onView}
			/>
		))}
	</div>
)

export default CategoryList
