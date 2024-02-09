"use client"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import ItemProduct from "@/components/product-item/ItemProduct";
import Button from "@/components/button/Button";
import Div from "@/components/helper/Div";

import football from "../assets/item-showcase/football.jpg";
import footwear from "../assets/item-showcase/footwear.jpg";
import men from "../assets/item-showcase/men.jpg";
import timans from "../assets/item-showcase/timnas.jpg";

const showcase = [
  {title : 'indonesia national team', photo:timans},
  {title : 'footwear', photo:footwear},
  {title : 'football club', photo:football},
  {title : 'men', photo:men},
]


const slider = [1,2,3,4,5,6,7,8,9,10];

export default function Home() {
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="w-full bg-white min-h-64 md:min-h-[42vh] lg:min-h-[92vh]"
      >
        {slider.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-64 md:h-[42vh] lg:h-[92vh] bg-red-100 grid place-items-center text-3xl">
              <h1>{item}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* showcase small */}
      <Div center full>
        <div className="grid grid-cols-4 w-full gap-3 px-4 mt-16 max-w-screen-maxxx lg:gap-8">
          {showcase.map((item, index) => (
            <ItemMenu
              className={"h-20 text-xs lg:h-64"}
              text={item.title}
              gamabr={item.photo}
              key={index}
            />
          ))}
        </div>
      </Div>

      {/* new product */}
      <Div center full>
        <div className="flex flex-col items-center mt-16 px-4 max-w-screen-maxxx">
          <h1 className="text-xl">· NEW PRODUCT ·</h1>

          <div className="grid grid-cols-2 gap-3 gap-y-5 mt-8 w-full md:grid-cols-4 md:gap-5">
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
          </div>

          <Button
            className={
              "w-full bg-white border border-dark-me mt-5 hover:bg-dark-me hover:text-white md:w-[25vw] md:mt-12"
            }
          >
            Lihat Semua Produk
          </Button>
        </div>
      </Div>

      {/* item gede */}
      <Div center full>
        <div className="grid grid-cols-1 w-full px-4 mt-16 gap-4 md:grid-cols-2 max-w-screen-maxxx">
          {showcase.map((item, index) => (
            <ItemMenu
              key={index}
              className={
                "h-96 text-3xl font-semibold md:h-[400px] lg:border-none md:font-bold md:text-4xl lg:text-5xl lg:h-[600px]"
              }
              text={item.title}
              gamabr={item.photo}
            />
          ))}
        </div>
      </Div>
      {/* brands */}
      <Div center full className="mt-8">
        <div className="flex flex-col items-center mt-10 px-4 max-w-screen-maxxx">
          <h1 className="text-xl">· BRANDS ·</h1>

          <div className="grid grid-cols-2 gap-3 gap-y-5 mt-8 w-full md:grid-cols-4 md:gap-5">
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
          </div>

          <Button
            className={
              "w-full bg-white border border-dark-me mt-5 hover:bg-dark-me hover:text-white md:w-[25vw] md:mt-12"
            }
          >
            Lihat Semua Produk
          </Button>
        </div>
      </Div>
    </>
  );
}

const ItemMenu = ({ className, gamabr,text }) => {
  return (
    <div
      className={`w-full h-20 grid place-items-center uppercase relative cursor-pointer md:h-44 ${className}`}
    >
      <Link
        href={"/"}
        className="flex items-center justify-center w-full h-full"
      >
        <Image
          src={gamabr}
          width={900}
          height={900}
          alt="popo"
          className="absolute top-0 left-0 object-cover w-full h-full -z-10"
        />
        <Button
          className={`px-0 md:px-2 md:text-lg lg:text-3xl md:font-normal lg:font-bold max-w-[80%] uppercase text-white`}
        >
          {text}
        </Button>
      </Link>
    </div>
  );
};