"use client"
import React, {useState} from 'react'

import Div from '@/components/helper/Div'
import SelectOption from '@/components/input/SelectOption';
import classNames from "classnames";
import Button from '@/components/button/Button';

import jne from '../../../assets/image-logo/jne.png';
import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa';
import { ListSosmed } from '@/app/article/[slug]/page';


const ProductDescriptions = () => {
const [addCount, setAddCount] = useState(1)

  return (
    <Div wrap className="mt-10 md:mt-0">
      <Div>
        <h1 className="text-xl font-semibold">
          MILLS Sepatu Futsal Xyclops Shade In White / Blue / Magenta 9401319
        </h1>
        <p className="text-xl font-semibold text-yellow-me">IDR 449,000</p>
      </Div>

      <Div full className="grid grid-cols-2 gap-4 mt-6">
        <SelectOption
          label={"color"}
          dataOption={["white", "blue", "magenta"]}
        />
        <SelectOption
          label={"size"}
          dataOption={["37", "38", "39", "40", "41", "42", "43", "44"]}
        />

        <Div full between className="p-3 border border-r-gray-50">
          <div
            className={classNames(
              "w-5 text-lg grid place-items-center cursor-pointer",
              addCount == 1 ? "opacity-0" : "opacity-100"
            )}
            onClick={() =>
              setAddCount((prevState) =>
                prevState > 1 ? prevState - 1 : prevState
              )
            }
          >
            -
          </div>
          <p>{addCount}</p>
          <div
            className="w-5 text-lg grid place-items-center cursor-pointer"
            onClick={() => setAddCount((prevState) => prevState + 1)}
          >
            +
          </div>
        </Div>
      </Div>

      <Button className={"bg-yellow-me text-white w-full mt-6"}>
        Masukkan Keranjang
      </Button>

      {/* desc text */}
      <Div full className="mt-10 text-sm">
        <p>
          XYCLOPS SHADE IN: BE THE FASTEST ON THE COURT! <br /> <br /> Xyclops
          Shade juga akan menjadi senjata para atlet futsal dengan tipikal
          pelari di lapangan! <br /> <br />
          Xyclops Shade sebagai salah satu produk andalan dari Silo Xyclops siap
          menunjang performamu dalam mencapai tingkat kecepatan tertinggi.{" "}
          <br /> <br />
          Dirasakan langsung oleh para MILLS Squad, Xyclops Shade sudah terbukti
          dapat dipakai dalam intensitas permainan yang tinggi sekalipun. <br />{" "}
          <br /> Dengan material mesh yang breathable dibalut dengan TPU di
          permukaannya, membuat Xyclops Shade sangat nyaman dipakai dalam jangka
          waktu yang lama. <br /> <br /> Size Convertion : <br /> 38 : 24,4cm{" "}
          <br /> 39 : 25,1cm <br /> 40 : 25,7cm <br /> 41 : 26,4cm <br /> 42 :
          27cm <br /> 43 : 27,7cm <br /> 44 : 28,4cm <br /> 45 : 29 cm <br />{" "}
          <br /> Now available at official offline and online store MILLS. 
        </p>
      </Div>

      <Div full flex column className='mt-10 justify-start' gap='3'>
      <p className='text-sm text-gray-500'>Estimasi pengiriman</p>
        <Div full between className="border border-gray-500 p-3">
          <p className='text-sm'>IDR 30.000</p>
          <Div flex itemsCenter gap="4">
            <Image src={jne} width={100} height={100} className='w-6' alt='makmu'/>
            <FaAngleRight/>
          </Div>
        </Div>
      </Div>

      <ListSosmed/>
    </Div>
  );
}

export default ProductDescriptions