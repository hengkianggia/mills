"use client";

import React, { useEffect, useState } from "react";

import Button from "@/components/button/Button";
import Div from "@/components/helper/Div";
import Emptycart from "@/components/pages/cart/Emptycart";
import Title from "@/components/title component/Title";
import { cartIsActive, cartIsNonActive } from "@/store/cartModalShowing";
import { useDispatch } from "react-redux";
import { RiCoupon3Fill } from "react-icons/ri";
import getWindowDimension from "@/utils/getWindowDimension";
import ItemOnCart from "@/components/pages/cart/ItemOnCart";
import { useSelector } from "react-redux";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartIsActive());
  }, []);

  const { isMobileDimension } = getWindowDimension();

  const productInCart = useSelector((state) => state.cart.items);
  // console.log(productInCart);

  return (
    <Div wrap>
      <Title title={"keranjang belanja"} />

      <Div
        wrap
        maxWidth
        className="mt-10 gap-6 px-4 md:px-6 md:mt-16 lg:flex-row lg:justify-between lg:gap-0 lg:px-0 lg:items-start"
      >
        {/* left/top */}
        <Div full className="w-full lg:w-[65%]">
          {productInCart.length <= 1 ? (
            <Emptycart />
          ) : (
            <ItemOnCart data={productInCart} />
          )}
        </Div>

        {/* right/bottom */}
        <Div full className="lg:w-[33%]">
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
  );
};

export default Cart;
