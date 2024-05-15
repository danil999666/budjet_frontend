import { FC, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import img2 from '../assets/moon.png'
import img3 from '../assets/mountains_behind.png'
import img4 from '../assets/mountains_front.png'
import img1 from '../assets/stars.png'
import '../styles/homePage.css'

const Home: FC = () => {
	const starsRef = useRef<HTMLImageElement>(null)
	const moonRef = useRef<HTMLImageElement>(null)
	const textRef = useRef<HTMLHeadingElement>(null)
	const btnRef = useRef<HTMLAnchorElement>(null)
	const mountainBehindRef = useRef<HTMLImageElement>(null)

	useEffect(() => {
		const handleScroll = () => {
			const stars = starsRef.current
			const moon = moonRef.current
			const text = textRef.current
			const btn = btnRef.current
			const mountainBeh = mountainBehindRef.current

			if (stars && moon && text && btn && mountainBeh) {
				const value = window.scrollY
				stars.style.left = value * 0.25 + 'px'
				moon.style.top = value * 0.8 + 'px'
				mountainBeh.style.top = value * 0.4 + 'px'
				text.style.marginRight = value * 2.8 + 'px'
				text.style.marginBottom = value * 1.5 + 'px'
				btn.style.marginTop = value * 0.7 + 'px'
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<>
			<div className='content'>
				<section>
					<img src={img1} id='stars' ref={starsRef} alt='Stars' />
					<img src={img2} id='moon' ref={moonRef} alt='Moon' />
					<img
						src={img3}
						id='mountains_behind'
						ref={mountainBehindRef}
						alt='Mountains Behind'
					/>
					<img src={img4} id='mountains_front' alt='Mountains Front' />
					<h2 id='text' ref={textRef}>
						Money Fund
					</h2>
					<NavLink to={'/transactions'} id='btn' ref={btnRef}>
						Explore
					</NavLink>
				</section>
				<div className='sec dark:bg-slate-300'>
					<h2 className='dark:text-black'>About this app</h2>
					<p className='dark:text-black'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
						sunt corporis in esse iure tempore porro adipisci excepturi, ea
						nostrum soluta deleniti aliquid molestias odio sapiente numquam
						atque explicabo reiciendis! Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Incidunt, reprehenderit amet! Repellat expedita
						eum culpa voluptatibus ducimus a dolorum sequi repudiandae
						consectetur, aliquid asperiores doloremque debitis distinctio esse.
						Harum, aspernatur? Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Nostrum dolore consequuntur ducimus debitis
						praesentium exercitationem laborum impedit veniam? Est sequi
						molestias eum nam iure, atque totam. Cupiditate doloribus aut
						repellendus.
					</p>
					<p className='dark:text-black'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
						sunt corporis in esse iure tempore porro adipisci excepturi, ea
						nostrum soluta deleniti aliquid molestias odio sapiente numquam
						atque explicabo reiciendis! Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Incidunt, reprehenderit amet! Repellat expedita
						eum culpa voluptatibus ducimus a dolorum sequi repudiandae
						consectetur, aliquid asperiores doloremque debitis distinctio esse.
						Harum, aspernatur? Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Nostrum dolore consequuntur ducimus debitis
						praesentium exercitationem laborum impedit veniam? Est sequi
						molestias eum nam iure, atque totam. Cupiditate doloribus aut
						repellendus.
					</p>
					<p className='dark:text-black'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
						sunt corporis in esse iure tempore porro adipisci excepturi, ea
						nostrum soluta deleniti aliquid molestias odio sapiente numquam
						atque explicabo reiciendis! Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Incidunt, reprehenderit amet! Repellat expedita
						eum culpa voluptatibus ducimus a dolorum sequi repudiandae
						consectetur, aliquid asperiores doloremque debitis distinctio esse.
						Harum, aspernatur? Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Nostrum dolore consequuntur ducimus debitis
						praesentium exercitationem laborum impedit veniam? Est sequi
						molestias eum nam iure, atque totam. Cupiditate doloribus aut
						repellendus.
					</p>
					<p className='dark:text-black'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
						sunt corporis in esse iure tempore porro adipisci excepturi, ea
						nostrum soluta deleniti aliquid molestias odio sapiente numquam
						atque explicabo reiciendis! Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Incidunt, reprehenderit amet! Repellat expedita
						eum culpa voluptatibus ducimus a dolorum sequi repudiandae
						consectetur, aliquid asperiores doloremque debitis distinctio esse.
						Harum, aspernatur? Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Nostrum dolore consequuntur ducimus debitis
						praesentium exercitationem laborum impedit veniam? Est sequi
						molestias eum nam iure, atque totam. Cupiditate doloribus aut
						repellendus.
					</p>
					<p className='dark:text-black'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
						sunt corporis in esse iure tempore porro adipisci excepturi, ea
						nostrum soluta deleniti aliquid molestias odio sapiente numquam
						atque explicabo reiciendis! Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Incidunt, reprehenderit amet! Repellat expedita
						eum culpa voluptatibus ducimus a dolorum sequi repudiandae
						consectetur, aliquid asperiores doloremque debitis distinctio esse.
						Harum, aspernatur? Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Nostrum dolore consequuntur ducimus debitis
						praesentium exercitationem laborum impedit veniam? Est sequi
						molestias eum nam iure, atque totam. Cupiditate doloribus aut
						repellendus.
					</p>
				</div>
			</div>
		</>
	)
}

export default Home
