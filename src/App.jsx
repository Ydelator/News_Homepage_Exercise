import { useState } from 'react'
import Header from './components/Header'
import MainComponent from './components/MainComponent'
import NewContainer from './components/NewContainer'
import ArticleContainer from './components/ArticleContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='px-4 pt-6'>
      <Header></Header>
      <div className='lg:flex lg:gap-8'>
        <MainComponent></MainComponent>
        <NewContainer></NewContainer>
      </div>
      <ArticleContainer></ArticleContainer>
    </main>
  )
}

export default App
