import React from 'react'
import error from '../img/404.svg'

const Error404 = () => {
  return (
    <div>
      <div className="p-4  sm:ml-64 dark:bg-gray-600">
        <div className="p-4  dark:border-gray-700 mt-14  overflow-x-auto">
              <img src={error} className="w-full" alt="" />
            
        </div>
      </div>
    </div>
  )
}

export default Error404