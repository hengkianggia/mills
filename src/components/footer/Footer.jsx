"use client";

import React, { useState } from "react";

import { FaFacebookF, FaSortDown, FaSortUp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Button from "../button/Button";
import classNames from "classnames";

const Footer = () => {
  const [openFooter, setOpenFooter] = useState("");

  return (
    <footer className="flex flex-col items-center pb-20 lg:pb-6">
      <div className="flex flex-col w-full px-3 pt-20 pb-6 mb-10 text-sm bg-gray-me md:px-6 lg:flex-row lg:px-[12.5vw] ">
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
              "mt-3 max-w-[40%] bg-yellow-me md:max-w-[20%] lg:max-w-[50%]"
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

        <div className="items-start w-full mt-5 space-y-3 lg:flex lg:mt-0 lg:justify-around">
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
                  <FaSortUp />
                ) : (
                  <FaSortDown />
                )}
              </div>
            </div>
            {openFooter == "customer-services" && (
              <div className="mt-4 space-y-1">
                <p>FAQ</p>
                <p>Return</p>
                <p>Shipping</p>
                <p>Terms & Conditions</p>
              </div>
            )}
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
                {openFooter === "information" ? <FaSortUp /> : <FaSortDown />}
              </div>
            </div>
            {openFooter == "information" && (
              <div
                className={classNames(
                  "mt-4 space-y-1",
                )}
              >
                <p>FAQ</p>
                <p>Return</p>
                <p>Shipping</p>
                <p>Terms & Conditions</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <p className="text-xs">COPYRIGHT © 2020 MILLS </p>
    </footer>
  );
};

export default Footer;
