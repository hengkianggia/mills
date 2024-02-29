"use client"
import React from 'react'

import Div from '@/components/helper/Div'
import ItemProduct from '@/components/product-item/ItemProduct'
import Title from '@/components/title component/Title'
import { FaChevronDown } from 'react-icons/fa'
import { IoFilter } from 'react-icons/io5'

const ListProduct = () => {
  return (
    <Div wrap>
      <Div wrap maxWidth>
      <Title title={'produk kami'}/>
        <Div wrap className='mt-14 px-4'>
        {/* filter section */}
          <Div flex itemsCenter full className='justify-end gap-4'>
          <Div flex itemsCenter pointer className='gap-2'>
            <p>Saring</p>
            <IoFilter/>
          </Div>
          <Div flex itemsCenter pointer className='gap-2'>
            <p>Urutkan</p>
            <FaChevronDown/>
          </Div>
          </Div>

          {/* list product section */}
          <Div full className='mt-10 grid grid-cols-2 gap-y-5 md:grid-cols-4'>
            <ItemProduct/>
            <ItemProduct/>
            <ItemProduct/>
            <ItemProduct/>
            <ItemProduct/>
          </Div>
        </Div>
      </Div>
    </Div>
  )
}

export default ListProduct