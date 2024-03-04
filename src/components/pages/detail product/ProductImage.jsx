"use client"
import Div from '@/components/helper/Div'
import Image from 'next/image';
import React, {useState} from 'react'

  const dataImage = [
    "https://sf-0.sirclocdn.com/products/1705737649847868923_id-11134207-7r98x-lqpq3j520v7217.jpg",
    "https://sf-0.sirclocdn.com/products/1705737650101179850_id-11134207-7r98p-lqpq3j520uwv09.jpg",
    "https://sf-0.sirclocdn.com/products/1705737649293958735_id-11134207-7r98u-lqpq3j520uv908.jpg",
    "https://sf-0.sirclocdn.com/products/1705737649593571180_id-11134207-7r98p-lqpq3j520umea5.jpg",
    "https://sf-0.sirclocdn.com/products/1705737650395158011_id-11134207-7r98z-lqpq3j520ur69f.jpg",
    "https://sf-0.sirclocdn.com/products/1705737651575587662_id-11134207-7r98q-lqpq3j5m01dkbf.jpg",
    "https://sf-0.sirclocdn.com/products/1705737652093389226_id-11134207-7r98p-lqpq3j520v2obe.jpg",
    "https://sf-0.sirclocdn.com/products/1705737652381325553_id-11134207-7r98q-lqpq3j520uu62b.jpg",
  ];

const ProductImage = () => {
const [activeImage, setActiveImage] = useState(dataImage[0]);

  return (
    <Div wrap>
      <Div wrap gap="5" className="">
        <Image
          src={activeImage}
          alt="product"
          width={900}
          height={900} 
          priority
          className="w-full"
        />
      </Div>

      <Div
        flex
        gap="3"
        itemsCenter
        className="w-[80%] bg-gray-50 snap-x snap-mandatory overflow-x-scroll no-scrollbar"
      >
        {dataImage.map((item, index) => (
          <Image
            onClick={() => setActiveImage(item)}
            key={index}
            src={item}
            priority
            alt="product"
            width={300}
            height={300}
            className="w-16 cursor-pointer opacity-60 hover:opacity-100"
          />
        ))}
      </Div>
    </Div>
  );
}

export default ProductImage