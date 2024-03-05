import React, {useState} from 'react'

import Div from '@/components/helper/Div'
import Image from 'next/image'
import classNames from 'classnames'
import image from '../../../assets/produk-photo/mills photo 1.webp'

import { MdDelete } from 'react-icons/md'
import getWindowDimension from '@/utilis/getWindowDimension'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];


const ItemOnCart = () => {
  const [totalPrice, setTotalPrice] = useState(499000);
  const [addCount, setAddCount] = useState(1)

  const addItem = () => {
    setAddCount((prevState) => prevState + 1);
    setTotalPrice((prevPrice) => prevPrice + 499000);
  }
  const minItem = () => {
    setAddCount((prevState) => (prevState > 1 ? prevState - 1 : prevState));
    setTotalPrice((prevPrice) => (prevPrice > 499000 ? prevPrice - 499000 : prevPrice));
  }

  const{isMobileDimension}=getWindowDimension()

  let content = (
    <Div full gap="3" className="flex justify-between items-start ">
      <Image src={image} className="w-[35%] md:w-[45%]" />

      <Div flex className="justify-between items-start md:gap-5">
        <Div flex column className="text-sm md:text-xl">
          <h1 className="font-semibold">
            MILLS Sepatu Enermax Nergetic Orange / Navy / White 9101304
          </h1>
          <p className="text-xs md:text-lg">Orange / Navy / White 42</p>
          <p className="text-xs  md:text-lg mt-4 md:mt-10">IDR {totalPrice}</p>

          <Div between className="p-2 border border-r-gray-50 mt-3 w-[50%]">
            <button
              className={classNames(
                "w-5 text-lg grid place-items-center cursor-pointer",
                addCount == 1 ? "opacity-0" : "opacity-100"
              )}
              onClick={minItem}
            >
              -
            </button>
            <p>{addCount}</p>
            <button
              className="w-5 text-lg grid place-items-center cursor-pointer"
              onClick={addItem}
            >
              +
            </button>
          </Div>
        </Div>

        <MdDelete size={isMobileDimension ? 30 : 50} />
      </Div>
    </Div>
  );

  const contentOnLaptop = (
    <Div full gap="3" className="flex justify-between items-start ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead colSpan={2} className="w-[20%] text-center">
              BARANG
            </TableHead>
            <TableHead colSpan={2} className="w-[38%] text-center">
              NAMA PRODUK, UKURAN DAN WARNA
            </TableHead>
            <TableHead colSpan={2} className="w-[14%] text-center">
              HARGA
            </TableHead>
            <TableHead colSpan={2} className="w-[14%] text-center">
              KUANTITAS
            </TableHead>
            <TableHead colSpan={2} className="w-[14%] text-center">
              JUMLAH
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell colSpan={2} className="w-[20%]">
                <Image
                  src={image}
                  width={300}
                  height={300}
                  className="w-full"
                  alt="product"
                />
              </TableCell>

              <TableCell colSpan={2} className="w-[38%]">
                <Div full hfull flex column gap="1" className="uppercase">
                  <p className="font-semibold">
                    MILLS JERSEY PERSITA FC AWAY REPLICA VERSION 1178TGR WHITE
                  </p>
                  <p className="text-xs">XS WHITE</p>
                  <MdDelete size={22} className="mt-4 cursor-pointer" />
                </Div>
              </TableCell>
              <TableCell colSpan={2} className="w-[14%] text-xs">
                IDR 400.000
              </TableCell>
              <TableCell colSpan={2} className="w-[14%]">
                <Div
                full
                  between
                  className="p-2 border border-r-gray-50 mt-3 w-[50%]"
                >
                  <button
                    className={classNames(
                      "w-5 text-lg grid place-items-center cursor-pointer",
                      addCount == 1 ? "opacity-0" : "opacity-100"
                    )}
                    onClick={minItem}
                  >
                    -
                  </button>
                  <p>{addCount}</p>
                  <button
                    className="w-5 text-lg grid place-items-center cursor-pointer"
                    onClick={addItem}
                  >
                    +
                  </button>
                </Div>
              </TableCell>
              <TableCell colSpan={2} className="w-[14%] text-xs">
                IDR 400.000
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Div>
  );

  return (
    <>{isMobileDimension ? content: contentOnLaptop}</>
  );
}

export default ItemOnCart