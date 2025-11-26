import React from 'react'

function Button({value}) {
  return (
   <button
    type="button"
    className="btn-primary-color text-white text-sm font-medium px-6 py-3 rounded-md w-fit hover:opacity-90 cursor-pointer transition-opacity duration-200"
>
                {value}
              </button>
  )
}

export default Button