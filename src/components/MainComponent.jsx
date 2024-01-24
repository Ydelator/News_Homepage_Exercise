import React from 'react'
import ImagenMovil from '../assets/images/image-web-3-mobile.jpg'
import ImagenDesktop from '../assets/images/image-web-3-desktop.jpg'

const MainComponent = () => {
  return (
    <section className='mb-12'>
        <img src={ImagenMovil} alt="Imagen Movil" className='md:hidden'/>
        <img src={ImagenDesktop} alt="Imagen Desktop" className='hidden md:block'/>
        <div className='md:flex'>
            <h2 className='flex-1 text-[50px] font-bold md:text-[58px] leading-none py-6'>The Bright Future of Web 3.0?</h2>
            <div className='flex-1 pt-9'>
                <p className='text-[13px] mb-10 md:text-[15px]'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                But is it really fulfilling its promise?</p>
                <button className='bg-SoftRed text-white w-[185px] h-[48px] transition-all hover:bg-VeryDarkBlue'>READ MORE</button>
            </div>
        </div>
    </section>
  )
}

export default MainComponent