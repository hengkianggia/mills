"use client";

import React, { useState } from "react";

import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { FaCartPlus, FaSortDown, FaUser } from "react-icons/fa";

import image from "@/assets/image-logo/Mills Secondary Logo.png";

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
        href: "/",
      },
      {
        name: "shorts",
        href: "/",
      },
      {
        name: "jacket",
        href: "/",
      },
      {
        name: "hodie",
        href: "/",
      },
      {
        name: "aksessoris",
        href: "/",
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

  const navActive = (name) => {
    if (navItemActive === name) {
      setNavItemActive('');
    }
    setNavItemActive(name)
  }

  return (
    <nav className="w-full bg-white h-[65px] flex justify-between items-center px-4 fixed lg:px-[12.5vw] z-50">
      {/* left */}
      <GiHamburgerMenu size={16} className="lg:hidden" />
      <Image src={image} width={80} className="cursor-pointer" />

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
                  <div key={index} className="px-3 py-3 text-xs cursor-pointer min-w-[12vw] bg-gray-me">
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
          <FaUser size={16} />
          <FaSortDown size={16} />
        </div>

        <div className="relative cursor-pointer max-lg:hidden">
          <FaCartPlus size={16} />
          <div className="absolute -top-[9px] -right-2 px-[2px] rounded-sm bg-yellow-me text-xs font-semibold text-white">
            0
          </div>
        </div>

        <IoMdSearch size={20} className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
