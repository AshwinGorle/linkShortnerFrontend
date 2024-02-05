import React from 'react'

const StaticField = ({tittle, data}) => {
  return (
    <div className="border rounded-md bg-slate-50 border-gray-400 p-7 overflow-x-auto scroll-container">
        <span className="text-blue-500 font-bold text-2xl">
          {tittle} 
        </span>
        <span className="text-gray-700 text-2xl ">{data ? data : 'N/A'}</span>
      </div>
  )
}

export default StaticField
