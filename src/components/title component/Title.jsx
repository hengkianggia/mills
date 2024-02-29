import React from 'react'
import Div from '../helper/Div'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'

const Title = ({title}) => {
    const removeDash = (text) => {
      // Regex untuk menghilangkan tanda "-" dan diganti dengan spasi
      const pattern = /-/g;
      const replacedText = text.replace(pattern, " ");
      return replacedText;
    };

    const newTitle = removeDash(title)
  return (
    <Div flex column itemsCenter className='mt-14'>
      <h1 className="font-bold text-2xl uppercase lg:text-4xl">{newTitle}</h1>
      <Div flex itemsCenter className="gap-2 text-sm mt-1 capitalize">
        <Link href={"/"}>Beranda</Link>
        <FaAngleRight />
        <p>{newTitle}</p>
      </Div>
    </Div>
  );
}

export default Title