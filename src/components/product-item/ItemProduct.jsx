import React from 'react'

import Image from 'next/image'
import gambar from '../../assets/pas foto.png'
import Button from '../button/Button';

const ItemProduct = ({className}) => {
  return (
    <div className={`w-full h-full gap-2 group hover:shadow-lg transition-all ${className}`}>
      <Image
        src={gambar}
        width={100}
        height={100}
        className="object-cover w-full h-44 cursor-pointer md:h-44 lg:h-72"
      />
      <div className="p-2">
        <h2 className="text-sm font-semibold mt-2">
          MILLS Sepatu Olahraga Treximo Saga V2 Lime. Green / White / Black
          9101206
        </h2>
        <h3 className="text-sm font-semibold">IDR 499,900</h3>
        <Button
          className={
            "w-full bg-yellow-me text-xs mt-3 text-white md:hidden lg:block lg:opacity-0 group-hover:opacity-100 transition-all"
          }
        >
          Masukkan Keranjang
        </Button>
      </div>
    </div>
  );
}

export default ItemProduct