import Button from '@/components/button/Button'
import Div from '@/components/helper/Div'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

const CartModal = ({onClose}) => {
  const router = useRouter()

const buttonClick = () => {
  onClose()
  router.push('/cart')
}

  return (
    <>
      <Div between className="border border-b-2 border-gray-me pb-6">
        <h1 className="font-semibold">Keranjang Belanja</h1>
        <IoClose size={20} onClick={onClose} />
      </Div>

      {/* empty cart */}
      <Div center column className="h-80">
        <FaCartPlus size={44} />
        <h2 className="font-bold text-lg mt-4">KERANJANG KOSONG</h2>
        <p className="text-sm text-gray-400">
          Maaf, produk habis/tidak tersedia
        </p>
      </Div>

      <Button
        className={
          "w-full bg-white text-yellow-me border border-yellow-me text-sm transition-all hover:bg-yellow-me hover:text-white"
        }
      >
        Gunakan kupon
      </Button>

      <Div
        full
        between
        className="bg-gray-me mt-8 px-2 py-4 text-sm font-semibold"
      >
        <p>Total pembayaran</p>
        <p>IDR 0</p>
      </Div>

      <Div flex column full className="mt-6 gap-2">
        <Button className={"w-full bg-yellow-me text-white border text-sm"}>
          Beli
        </Button>
        <Button
          className={
            "w-full bg-white text-yellow-me border border-yellow-me text-sm transition-all hover:bg-yellow-me hover:text-white"
          }
          onClick={buttonClick}
        >
          Liat keranjang
        </Button>
      </Div>
    </>
  );
}

export default CartModal