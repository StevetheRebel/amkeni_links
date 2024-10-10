import React from 'react'

function Footer() {
    const date = new Date ()
    let year = date.getFullYear()

  return (
    <div className='text-2xl flex justify-center mb-4 sm:mb-6 sm:text-3xl'>
        <p>Amkeni Malindi &copy;{year}</p>
    </div>
  )
}

export default Footer