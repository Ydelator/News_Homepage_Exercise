import React from 'react'
import BurgerMenu from '../assets/images/icon-menu.svg'

const Navbar = () => {
  return (
    <>
        <ul className='hidden md:flex text-[18px] md:w-[438px] md:place-content-around md:text-4 md:items-center'>
            <li>
                <a href="#" className='hover:text-Softorange'>Home</a>
            </li>
            <li>
                <a href="#" className='hover:text-Softorange'>New</a>
            </li>
            <li>
                <a href="#" className='hover:text-Softorange'>Popular</a>
            </li>
            <li>
                <a href="#" className='hover:text-Softorange'>Trending</a>
            </li>
            <li>
                <a href="#" className='hover:text-Softorange'>Categories</a>
            </li>
        </ul>
        <img src={BurgerMenu} alt="Menu" className='w-8 h-7 cursor-pointer md:hidden'/>
    </>
  )
}

export default Navbar