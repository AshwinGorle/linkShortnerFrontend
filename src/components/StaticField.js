import React from 'react'

const StaticField = ({tittle, data}) => {
  return (
    <div className="border rounded-md bg-slate-50 border-gray-400 p-2 overflow-x-auto scroll-container">
        <span className="text-blue-500 font-bold text-lg">
          {tittle} 
        </span>
        <span className="text-gray-700 text-md ">{data ? data : 'N/A'}</span>
      </div>
  )
}

export default StaticField
