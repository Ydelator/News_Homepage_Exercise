import React from 'react'
import Article from './Article'
import imgArticle1 from '../assets/images/image-retro-pcs.jpg'
import imgArticle2 from '../assets/images/image-top-laptops.jpg'
import imgArticle3 from '../assets/images/image-gaming-growth.jpg'

const ArticleContainer = () => {
  return (
    <section className='mt-6 md:flex md:gap-5 md:flex-wrap md:justify-evenly'>
        <Article
            img = {imgArticle1}
            number = '01'
            title = 'Reviving Retro PCs'
            text = 'What happens when old PCs are given modern upgrades?'
        />
        <Article
            img = {imgArticle2}
            number = '02'
            title = 'Top 10 Laptops of 2022'
            text = 'Our best picks for various needs and budgets.'
        />
        <Article
            img = {imgArticle3}
            number = '03'
            title = 'The Growth of Gaming'
            text = 'How the pandemic has sparked fresh opportunities.'
        />
    </section>
  )
} 

export default ArticleContainer