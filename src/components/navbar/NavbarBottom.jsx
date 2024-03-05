"use client"
import React, {useState} from "react";

import { AiFillHome } from "react-icons/ai";
import { IoGrid } from "react-icons/io5";
import { FaChevronDown, FaChevronUp, FaShoppingBag } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { useSelector } from "react-redux";
import getWindowDimension from "@/utilis/getWindowDimension";
import Div from "../helper/Div";
import Button from "../button/Button";

const NavbarBottom = () => {
  const [subtotalProduk, setSubtotalProduk] = useState(true)
  const cartModal = useSelector((state) => state.cartModal.cart);
  const kondisi = cartModal == false;

  const {isMobileDimension,isTabletDimension}=getWindowDimension()

  const normalNav = (
    <div className="fixed w-full h-[60px] flex justify-around pt-3 bg-white bottom-0 left-0 right-0 lg:hidden z-40">
      <Link href={"/"}>
        <div className="flex flex-col items-center gap-1">
          <AiFillHome size={18} />
          <p className="text-xs">Home</p>
        </div>
      </Link>

      <Link href={"/toko"}>
        <div className="flex flex-col items-center gap-1">
          <IoGrid size={18} />
          <p className="text-xs">Toko</p>
        </div>
      </Link>

      <Link href={"/cart"}>
        <div className="relative flex flex-col items-center gap-1">
          <FaShoppingBag size={18} />
          <p className="text-xs">Keranjang</p>

          <div className="absolute -top-[2px] right-0 px-[3px] rounded-sm bg-yellow-me text-xs font-semibold text-white">
            0
          </div>
        </div>
      </Link>

      <Link href={"/login"}>
        <div className="flex flex-col items-center gap-1">
          <FaUser size={18} />
          <p className="text-xs">Masuk</p>
        </div>
      </Link>
    </div>
  );

  const cartNav = (
    <Div
      flex
      column
      full
      fixed
      gap="3"
      className="px-4 py-3 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] bottom-0 left-0 right-0 md:p-6 lg:hidden z-40"
    >
      {subtotalProduk && (
        <Div full between className="py-3 text-xs pb-5 mb-3 border-b border-gray-300 md:text-lg">
          <p>Subtotal (Produk)</p>
          <p>IDR 0</p>
        </Div>
      )}

      <Div full between>
        <Div flex column className="text-xs md:text-lg">
          <p>Total Pembayaran</p>
          <p className="font-semibold">IDR 0</p>
        </Div>
        <Div flex itemsCenter gap='3'>
          <Div className="p-2 h-[80%] border-2 border-yellow-me grid place-items-center">
            {subtotalProduk ? (
              <FaChevronDown
                className="text-yellow-me"
                size={14}
                onClick={() => setSubtotalProduk(false)}
              />
            ) : (
              <FaChevronUp
                className="text-yellow-me"
                size={14}
                onClick={() => setSubtotalProduk(true)}
              />
            )}
          </Div>

          <Button
            children={"Beli"}
            className={"bg-yellow-me text-white w-[35vw] rounded-md"}
          />
        </Div>
      </Div>
    </Div>
  );

  return (
    <>
      {kondisi
        ? normalNav
        : kondisi == false && (isMobileDimension | isTabletDimension) ? cartNav : ""}
    </>
  );
};

export default NavbarBottom;
