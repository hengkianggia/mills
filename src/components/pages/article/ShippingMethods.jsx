import React from "react";

import Div from "@/components/helper/Div";

const ShippingMethods = () => {
  return (
    <Div full className="w-full flex flex-col items-center">
      <div className="md:max-w-[70%] lg:max-w-[50%]">
        <p className="text-xs">
          SHIPPING <br />
        </p>

        <ul className="list-disc text-xs mt-6 pl-8 space-y-2">
          <li>
            MILLS mengirim ke seluruh wilayah di Indonesia menggunakan ekspedisi
            <strong>JNE EXPRESS.</strong>
          </li>
          <li>
            Kalian dapat mengecek tarif pengiriman dari
            <strong>TANGGERANG KARAWACI</strong> ke tempat kalian di sini
            <a href="https://www.jne.co.id/en/tracking/trace">
              https://www.jne.co.id/en/tracking/trace
            </a>
          </li>
          <li>
            Pesanan kalian akan dikirim pada hari yang sama jika kalian
            melakukan pembayaran dan konfirmasi pembayaran sebelum jam 15.00.
            Jika lebih dari jam 15.00, pesanan kalian akan diproses keesokan
            harinya.
          </li>
          <li>
            Untuk hari minggu kami closed, sehingga jika melakukan pemesanan
            hari Sabtu lewat dari 15.00 akan diproses dan dikirim hari Senin
          </li>
          <li>
            Resi akan dikirimkan oleh Kami ke Email kalian, jika dalam waktu H+2
            setelah status shipped kalian belum menerima resi, kalian dapat
            meminta resi langsung ke admin WA kami.
          </li>
          <li>
            Kalian dapat mengecek Resi Pengiriman ke
            <a href="https://www.jne.co.id/en/tracking/trace">
              https://www.jne.co.id/en/tracking/trace
            </a>
          </li>
          <li>
            Jika barang sudah diserahkan kepada <strong>JNE EXPRESS</strong>, segala
            bentuk keterlambatan atau barang hilang maka akan menjadi
            tanggungjawab penuh ekspedisi. Namun, MILLS tetap akan membantu
            kalian untuk follow up ke <strong>JNE EXPRESS</strong> hingga barangnya sampai
            dan jika buruknya paket kalian hilang, kami akan membantu kalian
            claim untuk mendapatkan full refund dari <strong>JNE EXPRESS</strong>.
          </li>
          <li>
            Segala bentuk complain pengiriman seperti barang kurang, packaging
            rusak, terbuka, basah, atau lainnya, kalian dapat langsung
            melaporkan kejadian tersebut kepada kami dan memberikan video
            unboxing dan foto kondisi paket yang kalian terima sebagai bentuk
            bukti. Jika tanpa video dan foto maka kami tidak menerima klaim.
          </li>
        </ul>
      </div>
    </Div>
  );
};

export default ShippingMethods;
