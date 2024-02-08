import React from "react";

import { AiFillHome } from "react-icons/ai";
import { IoGrid } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Link from "next/link";

const NavbarBottom = () => {
  return (
    <div className="fixed w-full h-[60px] flex justify-around pt-3 bg-white bottom-0 left-0 right-0 lg:hidden z-50">
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

      <Link href={"/keranjang"}>
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
};

export default NavbarBottom;
