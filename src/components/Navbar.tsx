import { useState } from 'react'
import { NavLinks } from '../constants/index'
import { Button } from './'
import { AiOutlineMenu ,AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    return (
        <div className='w-full fixed left-0 top-0 px-5 py-7 bg-[#dafcfc]'>
            <div className='flex justify-between'>
                <h1 className='font-bold'>steelmech.</h1>
                <ul className='flex gap-4 sm:flex hidden'>
                    {NavLinks.map((nav) => (
                        <ul key={nav.id} className='flex cursor-pointer'>
                            <li>{nav.text}</li>
                        </ul>
                    ))}
                    <div className='ml-10 mt-[-5px]'>
                        <Button
                            title='Get Started'
                            styles='' />
                    </div>

                </ul>
                {!nav && <AiOutlineMenu className='sm:hidden text-[30px] font-bold' onClick={()=> setNav(true)} />}
              

            </div>
            {nav && (
                    <div className='fixed top-0 w-full bg-[#dafcfc] left-0 '>
                        <ul className=' p-10 border-b'>
                        {nav && <AiOutlineClose className='sm:hidden text-[30px] font-bold float-right ' onClick={()=> setNav(false)} />}
                        {NavLinks.map((nav) => (
                        <ul key={nav.id} className=' cursor-pointer'>
                            <li className='pb-5'>{nav.text}</li>
                        </ul>
                    ))}
                        </ul>
                    </div>
                )}

        </div>
    )
}

export default Navbar
