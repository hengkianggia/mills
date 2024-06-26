"use client"

import React, { useState } from 'react'

import Div from '@/components/helper/Div'
import { IoClose } from 'react-icons/io5'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import classNames from 'classnames';
import Link from 'next/link';

const NavModal = ({ onClose, data }) => {
const[activeNav, setActiveNav] =useState('')

  const navActive = (name) => {
    if (activeNav == name) {
      setActiveNav("");
    } else{setActiveNav(name)}
  };

  return (
    <>
      <Div between className="border border-b-2 border-gray-me pb-6">
        <h1 className="font-semibold">Menu</h1>
        <IoClose size={20} onClick={onClose} />
      </Div>
      <Div between className="mt-4">
        <div className="w-full">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col relative ">
              <div className="w-full flex justify-between items-center">
                <p
                  className={classNames(
                    "uppercase text-sm py-2",
                    activeNav == item.href && "text-yellow-me font-semibold"
                  )}
                  onClick={onClose}
                >
                  <Link href={"/product"}>{item.name}</Link>
                </p>
                {activeNav == item.href ? (
                  <FaAngleUp className="text-yellow-me" />
                ) : (
                  <FaAngleDown onClick={() => navActive(item.href)} />
                )}
              </div>

              {activeNav == item.href && (
                <div className="flex flex-col gap-3 my-3">
                  {item.children.map((item, index) => (
                    <div key={index} className="px-3 text-sm uppercase" onClick={onClose}>
                      <Link href={"/product"}>{item.name}</Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Div>
    </>
  );
};

export default NavModal