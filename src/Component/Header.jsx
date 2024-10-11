import React from 'react'
import logo from '../../public/Amkeni Brand.webp'

function Header() {
  return (
    <div>
        <div className='w-full flex justify-center mt-4 sm:mt-6'>
            <img src={logo} alt="amkeni logo" className='rounded-full w-24 sm:w-32' />
        </div>
    </div>
  )
}

export default Header