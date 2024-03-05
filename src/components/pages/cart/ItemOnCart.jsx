import React, {useState} from 'react'

import Div from '@/components/helper/Div'
import Image from 'next/image'
import classNames from 'classnames'
import image from '../../../assets/produk-photo/mills photo 1.webp'

import { MdDelete } from 'react-icons/md'
import getWindowDimension from '@/utilis/getWindowDimension'

const ItemOnCart = () => {
const [totalPrice, setTotalPrice] = useState(499000);
  const [addCount, setAddCount] = useState(1)

  const addItem = () => {
    setAddCount((prevState) => prevState + 1);
    setTotalPrice((prevPrice) => prevPrice + 499000);
  }
  const minItem = () => {
    setAddCount((prevState) => (prevState > 1 ? prevState - 1 : prevState));
    setTotalPrice((prevPrice) => (prevPrice > 499000 ? prevPrice - 499000 : prevPrice));
  }

  const{isMobileDimension}=getWindowDimension()

  let content = (
    <Div full gap="3" className="flex justify-between items-start ">
      <Image src={image} className="w-[35%] md:w-[45%]" />

      <Div flex className="justify-between items-start md:gap-5">
        <Div flex column className="text-sm md:text-xl">
          <h1 className="font-semibold">
            MILLS Sepatu Enermax Nergetic Orange / Navy / White 9101304
          </h1>
          <p className="text-xs md:text-lg">Orange / Navy / White 42</p>
          <p className="text-xs  md:text-lg mt-4 md:mt-10">IDR {totalPrice}</p>

          <Div between className="p-2 border border-r-gray-50 mt-3 w-[50%]">
            <div
              className={classNames(
                "w-5 text-lg grid place-items-center cursor-pointer",
                addCount == 1 ? "opacity-0" : "opacity-100"
              )}
              onClick={minItem}
            >
              -
            </div>
            <p>{addCount}</p>
            <div
              className="w-5 text-lg grid place-items-center cursor-pointer"
              onClick={addItem}
            >
              +
            </div>
          </Div>
        </Div>

        <MdDelete size={isMobileDimension ? 30 : 50} />
      </Div>
    </Div>
  );

  const contentOnLaptop = (
    <Div full gap="3" className="flex justify-between items-start ">
    
    </Div>
  );

  return (
    <>{isMobileDimension ? content: contentOnLaptop}</>
  );
}

export default ItemOnCart