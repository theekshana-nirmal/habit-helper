import React from 'react'

const Card = ({children}) => {
  return (
    <div className='flex flex-col items-center justify-center w-full bg-white text-black p-4 rounded-lg shadow-md'>
      {children}
    </div>
  )
}

export default Card