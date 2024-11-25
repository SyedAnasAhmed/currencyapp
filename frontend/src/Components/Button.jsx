import React from 'react'

export default function Button({ onClick }) {
  return (
    <>
        <button onClick={onClick}  className='py-2 px-10 rounded  text-white font-semibold bg-[#F0547B] '>
            CONVERT
        </button>
    </>
  )
}
