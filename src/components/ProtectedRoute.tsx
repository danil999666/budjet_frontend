import { FC } from 'react'
import { useAuth } from '../hooks/useAuth'
import img from '../assets/FOR-WEB-404-astronaut.jpg'

interface Props{
    children: JSX.Element
}

export const ProtectedRoute: FC<Props> = ({children}) => {
    const isAuth = useAuth()
  return <>
    {isAuth ? children : 
        (<div className='flex flex-col justify-center items-center mt-20 gap-10'>
            <h1 className='text-2xl'>Must be logged in</h1>

            <img src={img} alt="img" />
        </div>
        )}
  </>
}
