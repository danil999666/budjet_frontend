import { FC } from 'react'
import CategoryForm from '../../pages/Categories/components/CategoryModalForm/CategoryModalForm'
import { ICategoryModal } from '../../pages/Categories/types/CategoryModal.types'

export const CategoryModal: FC<ICategoryModal> = ({
	type,
	id,
	setVisibleModal,
	initialTitle = '',
	initialDescription = '',
}) => (
	<div className='fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black/50 dark:bg-white/50 flex justify-center items-center'>
		<CategoryForm
			type={type}
			id={id}
			setVisibleModal={setVisibleModal}
			initialTitle={initialTitle}
			initialDescription={initialDescription}
		/>
	</div>
)

export default CategoryModal
