export interface ICategoryModal {
	type: 'post' | 'patch'
	id?: number
	setVisibleModal: (visible: boolean) => void
	initialTitle?: string
	initialDescription?: string
}

export interface ICategoryFormProps extends ICategoryModal {}
