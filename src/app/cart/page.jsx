"use client"

import Button from '@/components/button/Button'
import Div from '@/components/helper/Div'
import Emptycart from '@/components/pages/cart/Emptycart'
import Title from '@/components/title component/Title'
import React, { useState } from 'react'
import { RiCoupon3Fill } from "react-icons/ri";

const Cart = () => {
const [cart , setCart]=useState(null)

  return (
    <Div flex column full itemsCenter className="pt-14">
      <Title title={"keranjang belanja"} />

      <div className="w-full max-w-screen-maxxx flex flex-col mt-10 gap-6 px-4">
        {/* left/top */}
        <div className="w-full min-h-96">{cart == null && <Emptycart />}</div>

        {/* right/bottom */}
        <div className="w-full min-h-7">
          <div>
            <Button
              className={"border-2 border-yellow-me py-3 w-full grid-cols-10"}
            >
              <RiCoupon3Fill className="col-span-1 text-yellow-me" size={18} />
              <p className="col-span-4 text-gray-600 font-light">
                Gunakan kupon
              </p>
            </Button>
          </div>
        </div>
      </div>
    </Div>
  );
}

export default Cart
