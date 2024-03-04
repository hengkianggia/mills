import Div from '@/components/helper/Div';
import React from 'react'
import { IoClose } from 'react-icons/io5';

const SortItemModal = ({onClose}) => {
  return (
    <Div flex column full className="gap-5">
      <Div between className="border border-b-2 border-gray-me pb-6">
        <h1 className="font-semibold">Urutkan</h1>
        <IoClose size={20} onClick={onClose} className="cursor-pointer" />
      </Div>

      <Div flex column gap="3">
        <p className='hover:text-yellow-me cursor-pointer' onClick={onClose}>Harga (Terendah ke Tertinggi)</p>
        <p className='hover:text-yellow-me cursor-pointer' onClick={onClose}>Harga (Tertinggi ke Terendah)</p>
        <p className='hover:text-yellow-me cursor-pointer' onClick={onClose}>Tanggal (Terbaru ke Lama)</p>
      </Div>
    </Div>
  );
}

export default SortItemModal