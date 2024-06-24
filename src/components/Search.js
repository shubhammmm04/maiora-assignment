import React from 'react'

const Search = () => {
  return (


    <div className='flex border border-[1px] rounded-lg border-[#000000] items-center px-3  ml-[100px]'>
      <input type='search' className='border border-[transparent] py-2 outline-none' />
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
      </svg>
    </div>

  )
}

export default Search
