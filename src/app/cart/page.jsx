"use client"

import Button from '@/components/button/Button'
import Div from '@/components/helper/Div'
import Emptycart from '@/components/pages/cart/Emptycart'
import Title from '@/components/title component/Title'
import { cartIsActive, cartIsNonActive } from '@/store/cartModalShowing'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { RiCoupon3Fill } from "react-icons/ri";
import getWindowDimension from '@/utilis/getWindowDimension'

const Cart = () => {
    const [cart, setCart] = useState(null);

    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(cartIsActive());
    }, []);

    const { isMobileDimension}=getWindowDimension()

  return (
    <Div wrap>
      <Title title={"keranjang belanja"} />

      <Div wrap maxWidth className="mt-10 gap-6 px-4 lg:flex-row lg:px-16">
        {/* left/top */}
        <div className="w-full min-h-96">{cart == null && <Emptycart />}</div>

        {/* right/bottom */}
        <Div full>
          {/* kupomn code */}
          <Div
            flex
            itemsCenter
            full
            gap="3"
            className={"border border-yellow-me p-2 text-xs"}
          >
            <RiCoupon3Fill className="col-span-1 text-yellow-me" size={18} />
            <p className="col-span-4 text-gray-600 font-light">Gunakan kupon</p>
          </Div>

          {!isMobileDimension && (
            <Div
              wrap
              full
              gap="3"
              className="border border-yellow-me rounded-md p-3 mt-6 py-5"
            >
              <Div
                full
                between
                className="text-sm pb-6 border-b border-gray-me"
              >
                <p>Subtotal (produk)</p>
                <p>IDR 0</p>
              </Div>

              <Div
                full
                between
                className="text-sm pb-6 border-b border-gray-me font-semibold"
              >
                <p>Total Pembayaran</p>
                <p>IDR 0</p>
              </Div>

              <Button
                children={"Beli"}
                className={"bg-yellow-me text-white w-full"}
              />
            </Div>
          )}
        </Div>
      </Div>
    </Div>
  );}

export default Cart;