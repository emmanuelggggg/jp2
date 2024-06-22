import React from 'react'
import jp2 from '../img/logo-juanp.png'
const Index = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto flex justify-center items-center">
          <div>
            <h1 className='text-red-400 font-bold text-8xl text-center m-6'>Bienvenido</h1>
            <h1 className='text-sky-800 dark:text-sky-300 font-bold text-5xl text-center m-6'>Profesiograma</h1>
            <h1 className='text-sky-800 dark:text-sky-300 font-bold text-2xl text-center m-6'>2024-2025</h1>
            <img src={jp2} className='m-11' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index