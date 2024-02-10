"use client";

import React, { useState } from "react";

import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { FaCartPlus, FaSortDown, FaUser } from "react-icons/fa";

import image from "@/assets/image-logo/Mills Secondary Logo.png";
import Div from "../helper/Div";
import SideModal from "../modal/SideModal";
import SearchModal from "../modal/childSideModal/SearchModal";
import CartModal from "../modal/childSideModal/CartModal";
import Link from "next/link";
import NavModal from "../modal/childSideModal/NavModal";

const navItem = [
  {
    name: "indonesia national team",
    href: "indonesia-national-team",
    children: [
      {
        name: "indonesia national team 2020",
        href: "/indonesia-national-team/2020",
      },
      {
        name: "indonesia national team 2022",
        href: "/indonesia-national-team/2022",
      },
    ],
  },
  {
    name: "football club",
    href: "football-club",
    children: [
      {
        name: "persita fc 2022",
        href: "/",
      },
      {
        name: "persita fc 2023",
        href: "/",
      },
      {
        name: "bhayangkara fc 2021",
        href: "/",
      },
      {
        name: "bhayangkara fc 2022",
        href: "/",
      },
      {
        name: "bhayangkara fc 2023",
        href: "/",
      },
      {
        name: "sulut united 2021",
        href: "/",
      },
      {
        name: "sulut united 2021",
        href: "/",
      },
    ],
  },
  {
    name: "basketball club",
    href: "basketball-club",
    children: [
      {
        name: "bali united bc 2021",
        href: "/",
      },
    ],
  },
  {
    name: "men",
    href: "men",
    children: [
      {
        name: "apparel",
        href: "/apparel",
        child: [
          "football jersey",
          "running short",
          "cotton tee",
          "polo shirt",
          "base layer",
        ],
      },
      {
        name: "shorts",
        href: "/shorts",
        child: [
          "football short",
          "short pants",
          "long pants",
          "running short",
          "under layer",
        ],
      },
      {
        name: "jacket",
        href: "/jacket",
        child: ["track jacker", "windbreaker"],
      },
      {
        name: "hodie",
        href: "/hodie",
      },
      {
        name: "aksessoris",
        href: "/aksessoris",
        child: [
          "bags",
          "cap",
          "headband",
          "soccer bibs",
          "socks",
          "tumbler",
          "wirst band",
        ],
      },
    ],
  },
  {
    name: "women",
    href: "women",
    children: [
      {
        name: "apparel",
        href: "/",
      },
      {
        name: "shorts",
        href: "/",
      },
      {
        name: "jacket windbreaker",
        href: "/",
      },
      {
        name: "legging pants",
        href: "/",
      },
    ],
  },
  {
    name: "kids",
    href: "kids",
    children: [
      {
        name: "kids apparel",
        href: "/",
      },
      {
        name: "kids shorts",
        href: "/",
      },
      {
        name: "footwear kids",
        href: "/",
      },
    ],
  },
  {
    name: "footwear",
    href: "footwear",
    children: [
      {
        name: "football fg",
        href: "/",
      },
      {
        name: "futsal in",
        href: "/",
      },
      {
        name: "futsal street",
        href: "/",
      },
      {
        name: "running",
        href: "/",
      },
      {
        name: "lifestyle",
        href: "/",
      },
      {
        name: "sendal",
        href: "/",
      },
    ],
  },
  {
    name: "brands",
    href: "brands",
    children: [
      {
        name: "marc klok",
        href: "/",
      },
      {
        name: "renan silva",
        href: "/",
      },
      {
        name: "R.E.P",
        href: "/",
      },
      {
        name: "vindes",
        href: "/",
      },
      {
        name: "the flash",
        href: "/",
      },
      {
        name: "batman",
        href: "/",
      },
      {
        name: "superman",
        href: "/",
      },
      {
        name: "joker",
        href: "/",
      },
    ],
  },
  {
    name: "sale",
    href: "sale",
    children: [
      {
        name: "60% off",
        href: "/",
      },
      {
        name: "40% off",
        href: "/",
      },
      {
        name: "35% off",
        href: "/",
      },
      {
        name: "25% off",
        href: "/",
      },
      {
        name: "15% off",
        href: "/",
      },
    ],
  },
];

const Navbar = () => {
  const [navItemActive, setNavItemActive] = useState("");
  const [showModal, setShowModal] = useState('');

  const navActive = (name) => {
    if (navItemActive === name) {
      setNavItemActive('');
    }
    setNavItemActive(name)
  }

  return (
    <>
      <Div flex center fixed superTop full className={"bg-white w-full"}>
        <nav className="w-full bg-white h-[65px] flex justify-between items-center px-4 max-w-screen-maxxx">
          {/* left */}
          <GiHamburgerMenu
            size={16}
            className="lg:hidden"
            onClick={() => setShowModal("navbar")}
          />
          <Link href={"/"}>
            <Image src={image} width={80} className="cursor-pointer" alt="popo"/>
          </Link>

          {/* center */}
          <div className="flex justify-center h-full max-lg:hidden">
            {navItem.map((item, index) => (
              <div
                key={index}
                className="relative grid h-full px-3 text-xs uppercase transition-all cursor-pointer hover:bg-gray-me place-items-center"
                onMouseEnter={navActive.bind(this, item.href)}
                onMouseLeave={navActive.bind(this, "")}
              >
                <p>{item.name}</p>
                {navItemActive === item.href && (
                  <div className="absolute left-0 uppercase top-16">
                    {navItem[index].children.map((item, index) => (
                      <div
                        key={index}
                        className="px-3 py-3 text-xs cursor-pointer min-w-[12vw] bg-gray-me transition-all hover:bg-gray-200"
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* right */}
          <div className="flex items-center gap-3">
            <div className="flex cursor-pointer max-lg:hidden">
              <Link href={"/login"}>
                <FaUser size={16} />
              </Link>
              <FaSortDown size={16} />
            </div>

            <div className="relative cursor-pointer max-lg:hidden">
              <FaCartPlus size={16} onClick={() => setShowModal("cart")} />
              <div className="absolute -top-[9px] -right-2 px-[2px] rounded-sm bg-yellow-me text-xs font-semibold text-white">
                0
              </div>
            </div>

            <IoMdSearch
              size={20}
              className="cursor-pointer"
              onClick={() => setShowModal("search")}
            />
          </div>
        </nav>
      </Div>

      {/* search modal */}
      <SideModal
        right
        show={showModal == "search"}
        onClose={() => setShowModal("")}
      >
        <SearchModal onClose={() => setShowModal("")} />
      </SideModal>

      {/* cart modal */}
      <SideModal
        right
        show={showModal == "cart"}
        onClose={() => setShowModal("")}
      >
        <CartModal onClose={() => setShowModal("")} />
      </SideModal>

      {/* navbar modal */}
      <SideModal
        left
        show={showModal == "navbar"}
        onClose={() => setShowModal("")}
      >
        <NavModal onClose={() => setShowModal("")} data={navItem} />
      </SideModal>
    </>
  );
};

export default Navbar;
