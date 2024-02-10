import React from 'react'

import Div from '@/components/helper/Div';

const HowToOrder = () => {
  return (
    <Div full className="w-full flex flex-col items-center">
      <div className="md:max-w-[70%] lg:max-w-[50%]">
        <p className="text-xs">
          HOW TO ORDER <br />
          Berikut adalah langkah-langkah untuk melakukan pemesanan dan
          pembayaran di MILLS:
        </p>

        <ul className="list-disc text-xs mt-6 pl-8 space-y-2">
          <li>Pilih produk yang kamu inginkan.</li>
          <li>
            Jangan lupa untuk memilih ukuran dan jumlah produk yang ingin kamu
            order.
          </li>
          <li>Klik Add to Cart.</li>
          <li>
            Jika kamu masih ingin melanjutkan belanja, maka klik Continue
            Shopping, namun apabila kamu ingin melanjutkan ke proses pembayaran,
            maka klik Check Out .
          </li>
          <li>
            Kamu akan memasuki halaman rangkuman belanjamu. Apabila kamu
            memiliki kode kupon, kamu bisa memasukkan kode kuponmu di kolom yang
            telah tersedia.
          </li>
          <li>
            Apabila kamu sudah selesai mengecek ulang orderanmu, klik Check Out.
          </li>
          <li>Kamu akan diarahkan ke halaman Login.</li>
          <li>
            Apabila kamu sudah menjadi member, maka data dirimu akan langsung
            tercantum di dalam halaman berikutnya. Tetapi jika kamu memesan
            sebagai guest, maka kamu harus memasukkan data dirimu.
          </li>
          <li>
            Pastikan kamu menulis alamatmu dengan jelas dan lengkap untuk
            memudahkan proses pengiriman. Jika terjadi kendala pada proses
            pengisian data seperti tulisan "invalid shipping", kamu diminta agar
            tidak menulis kolom state/province dan city/district secara manual.
          </li>
          <li>
            Kamu wajib memilih sesuai pilihan kota atau kecamatan yang tersedia
            (tidak diperbolehkan mengetik sendiri/manual).
          </li>
          <li>
            Jika MILLS sedang mengadakan promo free ongkir, kalian bisa
            memasukan kode kupon promo free ongkir dihalaman place order ini.
          </li>
          <li>
            Setelah selesai, kalian bisa centang tulisan I agree to Terms of Use
            and Privacy Policy.
          </li>
          <li>Kemudian, kalian wajib click Place Order.</li>
          <li>
            Setelah itu, akan muncul halaman yang berisikan nomor order ID,
            informasi nomor rekening, dan nominal yang harus dibayarkan.
          </li>
          <li>
            Nomor order ID dikirimkan melalui email sehingga wajib menuliskan
            email dengan benar saat login.
          </li>
          <li>
            Harap perhatikan nominal yang harus dibayarkan, kalian wajib
            mencantumkan kode unik pembayaran saat transfer.
          </li>
          <li>Kamu akan menerima email notifikasi terkait pembelanjaanmu.</li>
          <li>
            Setelah melakukan pembayaran, kamu harus mengisi data verifikasi
            pembayaran di halaman CONFIRM PAYMEN.
          </li>
          <li>
            Batas waktu pembayaran 12 jam dari saat kamu click place order
            sehingga pastikan kamu transfer sebelum 12 jam dari waktu pemesanan.
          </li>
          <li>
            Setelah itu, orderanmu akan kami verifikasi dan segera dikirimkan.
          </li>
        </ul>

        <p className="text-xs mt-6">
          Best Regards, <br /> MILLS
        </p>
      </div>
    </Div>
  );
}

export default HowToOrder