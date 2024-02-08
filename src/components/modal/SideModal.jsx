import React from 'react'
import Div from '../helper/Div'
import { IoClose } from 'react-icons/io5'
import Button from '../button/Button';
import { FaSearch } from 'react-icons/fa';
import classNames from 'classnames';

const SideModal = ({ left, right, show,onClose }) => {
  return (
    <>
      {show && (
        <div className="w-[100vw] h-screen fixed top-0 z-50 left-0">
          <div
            className="w-full h-full bg-black opacity-50"
            onClick={onClose}
          ></div>
          <div
            className={classNames(
              "bg-white absolute top-0 w-[70vw] h-full px-3 py-6 md:max-w-[45vw] md:px-6 md:py-10 lg:max-w-[25vw]",
              left && "left-0",
              right && "right-0"
            )}
          >
            <Div between className="border border-b-2 border-gray-me pb-6">
              <h1 className='font-semibold'>Pencarian produk</h1>
              <IoClose size={20} onClick={onClose}/>
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
          </div>
        </div>
      )}
    </>
  );
};

export default SideModal