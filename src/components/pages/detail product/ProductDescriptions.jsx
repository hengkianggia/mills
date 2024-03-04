"use client"
import React, {useState} from 'react'

import Div from '@/components/helper/Div'
import SelectOption from '@/components/input/SelectOption';
import classNames from "classnames";
import Button from '@/components/button/Button';


const ProductDescriptions = () => {
const [addCount, setAddCount] = useState(1)

  return (
    <Div wrap className="mt-10">
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
              "w-5 text-lg grid place-items-center",
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
            className="w-5 text-lg grid place-items-center"
            onClick={() => setAddCount((prevState) => prevState + 1)}
          >
            +
          </div>
        </Div>
      </Div>
      <Button className={"bg-yellow-me text-white w-full mt-6"}>Masukkan Keranjang</Button>
    </Div>
  );
}

export default ProductDescriptions