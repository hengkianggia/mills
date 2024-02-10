"use client";

import React, { useState } from "react";

import { FaFacebookF, FaSortDown, FaSortUp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Button from "../button/Button";
import classNames from "classnames";
import Div from "../helper/Div";
import Link from "next/link";
import getWindowDimension from "@/utilis/getWindowDimension";

const Footer = () => {
  const [openFooter, setOpenFooter] = useState("");

  const {islaptopDimension} =getWindowDimension()

  return (
    <footer className="flex flex-col items-center pb-20 mt-36 lg:pb-6">
      <Div center full className="bg-gray-100 mb-10 lg:py-16">
        <div className="flex flex-col w-full px-3 pt-20 pb-6 max-w-screen-maxxx text-sm md:px-6 lg:flex-row ">
          <div className="lg:w-[50%]">
            <h1 className="font-bold">Ikuti kami</h1>
            <p>
              Berlangganan berita dan dapatkan penawaran eksklusif setiap minggu
            </p>
            <input
              type="text"
              placeholder="Masukkan email anda"
              className="w-full h-10 px-3 mt-4 rounded-md border-slate-300"
            />
            <Button
              className={
                "mt-3 max-w-[40%] bg-yellow-me md:max-w-[20%] lg:max-w-[50%] text-white"
              }
            >
              Langganan
            </Button>
            <div className="flex items-center gap-3 mt-4">
              <FaFacebookF size={24} />
              <FaInstagram size={24} />
              <FaYoutube size={24} />
              <FaTiktok size={24} />
            </div>
          </div>

          <div className="items-start w-full mt-5 space-y-3 lg:flex lg:mt-0 lg:justify-around lg:space-y-0">
            <div>
              <div className="flex items-center justify-between w-full">
                <h1 className="font-bold">Customer Services</h1>
                <div
                  onClick={() =>
                    openFooter == "customer-services"
                      ? setOpenFooter("")
                      : setOpenFooter("customer-services")
                  }
                >
                  {openFooter === "customer-services" ? (
                    <FaSortUp className="lg:hidden"/>
                  ) : (
                    <FaSortDown className="lg:hidden"/>
                  )}
                </div>
              </div>

              {/* for mobile and tablet */}
              {openFooter == "customer-services" && (
                <div className="mt-4 space-y-1 flex flex-col">
                  <Link href={"/"}>About us</Link>
                  <Link href={"/"}>How to order</Link>
                  <Link href={"/"}>Shipping Methods</Link>
                  <Link href={"/"}>Payment Methods</Link>
                  <Link href={"/"}>FAQ</Link>
                  <Link href={"/"}>Payment Confirmation</Link>
                  <Link href={"/"}>Contact Us</Link>
                </div>
              )}

              {/* for desktop */}
              <div className="mt-4 space-y-1 flex flex-col max-lg:hidden">
                <Link href={"/"}>About us</Link>
                <Link href={"/"}>How to order</Link>
                <Link href={"/"}>Shipping Methods</Link>
                <Link href={"/"}>Payment Methods</Link>
                <Link href={"/"}>FAQ</Link>
                <Link href={"/"}>Payment Confirmation</Link>
                <Link href={"/"}>Contact Us</Link>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between w-full">
                <h1 className="font-bold">Information</h1>
                <div
                  onClick={() =>
                    openFooter == "information"
                      ? setOpenFooter("")
                      : setOpenFooter("information")
                  }
                >
                  {openFooter === "information" ? (
                    <FaSortUp className="lg:hidden" />
                  ) : (
                    <FaSortDown className="lg:hidden" />
                  )}
                </div>
              </div>
              {/* for mobile and tablet */}
              {openFooter == "information" && (
                <div className={classNames("mt-4 space-y-1 flex flex-col")}>
                  <Link href={"/"}>About MILLS</Link>
                  <Link href={"/"}>Blog</Link>
                  <Link href={"/"}>Privacy Policy</Link>
                  <Link href={"/"}>Exchange & Return</Link>
                  <Link href={"/"}>Terms and Conditions</Link>
                </div>
              )}

              {/* fot laptop */}
              <div
                className={classNames(
                  "mt-4 space-y-1 flex flex-col max-lg:hidden"
                )}
              >
                <Link href={"/"}>About MILLS</Link>
                <Link href={"/"}>Blog</Link>
                <Link href={"/"}>Privacy Policy</Link>
                <Link href={"/"}>Exchange & Return</Link>
                <Link href={"/"}>Terms and Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </Div>

      <p className="text-xs">COPYRIGHT © 2020 MILLS </p>
    </footer>
  );
};

export default Footer;
