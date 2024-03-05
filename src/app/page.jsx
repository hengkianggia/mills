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


const slider = [
  "https://thumbor.sirclocdn.com/unsafe/1080x/filters:quality(90):format(webp)/https://storage.googleapis.com/sirclo-prod-storefront/banners/163c63fb-037c-4ffb-aabe-b9efc02704e2-XYCLOPS-SPEEDFREAK-WEB.jpg",
  "https://thumbor.sirclocdn.com/unsafe/1080x/filters:quality(90):format(webp)/https://storage.googleapis.com/sirclo-prod-storefront/banners/3742331a-9e61-4dd4-b625-f434b13c8e14-BATMAN-SPORT-APPAREL-2---WEB.jpg",
  "https://thumbor.sirclocdn.com/unsafe/1080x/filters:quality(90):format(webp)/https://storage.googleapis.com/sirclo-prod-storefront/banners/6b15a20b-d322-4401-a235-3cc06c6ff90b-BANNER-ENERMAX-DYNAPLATE-WEB.jpg",
  "https://thumbor.sirclocdn.com/unsafe/1080x/filters:quality(90):format(webp)/https://storage.googleapis.com/sirclo-prod-storefront/banners/d99957ee-cf87-4755-a33e-d038fddd19a7-BANNER-WEB-MEMBER.jpg",
  "https://thumbor.sirclocdn.com/unsafe/1080x/filters:quality(90):format(webp)/https://storage.googleapis.com/sirclo-prod-storefront/banners/0b9eeca4-5534-4066-881d-802c5fffd330-BANNER-RUNNING-WEB-4.jpg",
  "https://thumbor.sirclocdn.com/unsafe/1080x/filters:quality(90):format(webp)/https://storage.googleapis.com/sirclo-prod-storefront/banners/3baa835e-dd44-4c6b-8dc8-7530a3ee59c1-BANNER-PANTHERA%20WEB.jpg",
  "https://thumbor.sirclocdn.com/unsafe/1080x/filters:quality(90):format(webp)/https://storage.googleapis.com/sirclo-prod-storefront/banners/c39d1453-7491-41b6-b9eb-061d0b212e5f-KALDERA%20WEB.jpg",
  "https://thumbor.sirclocdn.com/unsafe/1080x/filters:quality(90):format(webp)/https://storage.googleapis.com/sirclo-prod-storefront/banners/410425ab-0260-4922-9a2b-63de3c84f291-Web%20TIMNAS%20JERSEY-100.jpg",
  "https://thumbor.sirclocdn.com/unsafe/720x/filters:quality(90):format(webp)/https://storage.googleapis.com/sirclo-prod-storefront/banners/7264d1bd-7878-44fc-b93d-822f7db177f5-BANNER-NERGETIC-WEB.jpg",
];

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
            <div className="w-full bg-red-100 grid place-items-center text-3xl">
              {/* <h1>{item}</h1> */}
              <Image src={item} width={2000} height={1000} className="w-full object-cover"/>
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
            <ItemProduct name={'MILLS Sepatu Olahraga Treximo Saga V2 Lime. Green / White / Black 9101206'} price={'499.900'} />
            <ItemProduct name={'MILLS Sepatu Olahraga Treximo Saga V2 Lime. Green / White / Black 9101206'} price={'499.900'} />
            <ItemProduct name={'MILLS Sepatu Olahraga Treximo Saga V2 Lime. Green / White / Black 9101206'} price={'499.900'} />
            <ItemProduct name={'MILLS Sepatu Olahraga Treximo Saga V2 Lime. Green / White / Black 9101206'} price={'499.900'} />
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
            <ItemProduct name={'MILLS Sepatu Olahraga Treximo Saga V2 Lime. Green / White / Black 9101206'} price={'499.900'} />
            <ItemProduct name={'MILLS Sepatu Olahraga Treximo Saga V2 Lime. Green / White / Black 9101206'} price={'499.900'} />
            <ItemProduct name={'MILLS Sepatu Olahraga Treximo Saga V2 Lime. Green / White / Black 9101206'} price={'499.900'} />
            <ItemProduct name={'MILLS Sepatu Olahraga Treximo Saga V2 Lime. Green / White / Black 9101206'} price={'499.900'} />
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
        href={"/product"}
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