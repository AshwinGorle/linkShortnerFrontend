import React from 'react'

const InputField = ({value, setValue, label}) => {
  return (
    <label className="font-bold font-mono text-slate-600 text-lg">
           <p className='text-blue-600'> {label}</p>
          <input
            type="text"
            value={value}
            placeholder={label}
            onChange={(e) => setValue(e.target.value)}
            className="border-b-2 border-gray-700 w-full text-lg focus:outline-none focus:border-blue-500"
          />
          </label>
  )
}

export default InputField
