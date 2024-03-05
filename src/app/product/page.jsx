"use client"
import React, { useState } from "react";

import Div from '@/components/helper/Div'
import ItemProduct from '@/components/product-item/ItemProduct'
import Title from '@/components/title component/Title'
import { FaChevronDown } from 'react-icons/fa'
import { IoFilter } from 'react-icons/io5'
import { products } from '@/data/ProductData'
import SideModal from '@/components/modal/SideModal'
import FilterListProductModal from '@/components/modal/childSideModal/FilterListProductModal'
import SortItemModal from "@/components/modal/childSideModal/SortItemModal";

const ListProduct = () => {
  const [modal, setModal] = useState(null)

  return (
    <>
      <Div wrap>
        <Div wrap maxWidth>
          <Title title={"produk kami"} />
          <Div wrap className="mt-14 px-4">
            {/* filter section */}
            <Div flex itemsCenter full className="justify-end gap-4">
              <Div
                flex
                itemsCenter
                pointer
                className="gap-2"
                onClick={() => setModal("saring")}
              >
                <p>Saring</p>
                <IoFilter />
              </Div>
              <Div
                flex
                itemsCenter
                pointer
                className="gap-2"
                onClick={() => setModal("urutkan")}
              >
                <p>Urutkan</p>
                <FaChevronDown />
              </Div>
            </Div>

            {/* list product section */}
            <Div full className="mt-10 grid grid-cols-2 gap-y-5 md:grid-cols-4">
              {products.map((item) => {
                return (
                  <ItemProduct
                  id={item.id}
                    key={item.id}
                    name={item.name}
                    price={item.price}
                  />
                );
              })}
            </Div>
          </Div>
        </Div>
      </Div>

      {/* saring modal */}
      <SideModal right show={modal == "saring"} onClose={() => setModal(null)}>
        <FilterListProductModal />
      </SideModal>

      {/* urutkan modal */}
      <SideModal right show={modal == "urutkan"} onClose={() => setModal(null)}>
        <SortItemModal onClose={() => setModal(null)} />
      </SideModal>
    </>
  );
}

export default ListProduct