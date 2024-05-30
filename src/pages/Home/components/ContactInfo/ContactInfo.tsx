import { FC } from 'react'

const ContactInfo: FC = () => {
	return (
		<section className='contact-info dark:bg-slate-300 dark:text-slate-950'>
			<h2 className='dark:text-slate-950'>Контактна інформація</h2>
			<p className='dark:text-slate-950'>Email: info@company.com</p>
			<p className='dark:text-slate-950'>Телефон: +380 500 199 151</p>
			<p className='dark:text-slate-950'>Адреса: 123 Main St, City, Country</p>
		</section>
	)
}

export default ContactInfo
