import React, { useEffect } from 'react'
import Header from './Component/Header'
import Links from './Component/Links'
import Footer from './Component/Footer'

function App() {
  useEffect(() => {
    document.body.classList.add('bg-custom-background', 'bg-cover', 'bg-[25%]', 'bg-no-repeat', 'bg-fixed')
  }, [])

  return (
    <div className='h-svh flex flex-col gap-4 lg:gap-8 sm:justify-between'>
      <Header/>
      <Links />
      <Footer />
    </div>
  )
}

export default App