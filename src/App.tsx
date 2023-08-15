import React from 'react'
import { Main, Navbar, About, Services, Features, Footer } from './components'

const App = () => {
  return (
    <div className=''>
      <div className='bg-[#dafcfc] sm:p-7 p-5 text-black'>
        <Navbar />
        <Main />
      </div>

<div className='about'>
      <div className='sm:p-7 p-5 '>
        <About />
      </div>


      <div className=' sm:p-7 p-5 sm:mt-[-10%] text-black '>
        <Services />
      </div>
      </div>

      
      <div className=' sm:p-7 p-5 text-black'>
        <Features />
      </div>

      <div className=' sm:p-7 p-5 text-black'>
        <Footer />
      </div>
    </div>
  )
}

export default App