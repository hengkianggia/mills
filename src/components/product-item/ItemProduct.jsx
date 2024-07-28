"use client"

import React, { useState } from 'react'

import Image from 'next/image'
import gambar from '../../assets/produk-photo/mills photo 1.webp'
import gambar2 from '../../assets/produk-photo/mills photo 2.webp'
import Button from '../button/Button';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';


const ItemProduct = ({className, name, price, id}) => {
const [image, setImage] =useState(gambar2)

  return (
    <div
      className={twMerge('w-full h-full gap-2 group hover:shadow-lg transition-all', className)}
    >
      <Link href={`/product/${id}`}>
        <Image
          src={image}
          width={700}
          height={700}
          alt="popo"
          onMouseEnter={() => setImage(gambar)}
          onMouseLeave={() => setImage(gambar2)}
          className="object-cover w-full h-44 cursor-pointer md:h-44 lg:h-72"
        />
        <div className="p-2">
          <h2 className="text-sm font-semibold mt-2">{name}</h2>
          <h3 className="text-sm font-semibold">IDR {price}</h3>
          <Button
            className={
              "w-full bg-yellow-me text-xs mt-3 text-white md:hidden lg:block lg:opacity-0 group-hover:opacity-100 transition-all"
            }
          >
            Masukkan Keranjang
          </Button>
        </div>
      </Link>
    </div>
  );
}

export default ItemProduct