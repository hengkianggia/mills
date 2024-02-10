import React from 'react'
import Div from '../helper/Div'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'

const Title = ({title}) => {
  return (
    <Div flex column itemsCenter>
      <h1 className="font-bold text-2xl uppercase lg:text-4xl">{title}</h1>
      <Div flex itemsCenter className="gap-2 text-sm mt-1 capitalize">
        <Link href={"/"}>Beranda</Link>
        <FaAngleRight />
        <p>{title}</p>
      </Div>
    </Div>
  );
}

export default Title