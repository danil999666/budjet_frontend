export interface ICurrencyConverterModal {
	setVisibleModal: (visible: boolean) => void
	setParentAmount: (amount: number) => void
}

export interface ICurrencyConverterFormProps extends ICurrencyConverterModal {}
