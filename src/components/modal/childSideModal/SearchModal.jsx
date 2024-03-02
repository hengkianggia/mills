import Button from '@/components/button/Button';
import Div from '@/components/helper/Div';
import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const SearchModal = ({onClose}) => {
  return (
    <>
      <Div between className="border border-b-2 border-gray-me pb-6">
        <h1 className="font-semibold">Pencarian produk</h1>
        <IoClose size={20} onClick={onClose} className="cursor-pointer" />
      </Div>
      <Div between className="mt-4">
        <input
          type="text"
          placeholder="Cari apapun"
          className="w-full h-10 px-3 border-2 border-r-0 border-gray-me text-sm"
        />
        <Button className=" bg-yellow-me text-white h-10 rounded-none">
          <FaSearch />
        </Button>
      </Div>
    </>
  );
}

export default SearchModal