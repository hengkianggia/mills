import React from 'react'
import { FaCartPlus } from 'react-icons/fa'

const Emptycart = () => {
  return (
    <div className='w-full min-h-96 flex flex-col items-center justify-center'>
      <FaCartPlus size={70}/>
      <h1 className='uppercase font-bold text-2xl mt-5'>keranjang kosong</h1>
      <p className='text-gray-400 text-sm'>Maaf, produk habis/tidak tersedia</p>
    </div>
  )
}

export default Emptycart