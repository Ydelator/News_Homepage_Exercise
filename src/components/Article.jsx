import React from 'react'


const Article = ({img, number, title, text}) => {
  return (
    <article className='flex h-[162px] md:w-[346px]'>
        <div className='w-[100px] flex-none'>
            <img src={img} alt="imgArticles"/>
        </div>
        <div className='pl-6'>
            <p className='text-GrayishBlue text-3xl mb-[18px] font-bold'>{number}</p>
            <h2 className='font-bold mb-[18px] hover:text-Softorange cursor-pointer'>{title}</h2>
            <p className='text-DarkGrayishBlue text-[16px]'>{text}</p>
        </div>
    </article>
  )
}

export default Article