import React from "react";

import Div from "@/components/helper/Div";

const Faq = () => {
  return (
    <Div full className="w-full flex flex-col items-center">
      <div className="md:max-w-[70%] lg:max-w-[50%]">
        <p className="text-xs">
          FAQ <br />
          FAQ Product
        </p>

        <ul className="list-disc text-xs mt-6 pl-8 space-y-2">
          <li>
            Product apa yang dijual oleh MILLS ?
            <ul className="text-xs mt-2 pl-0 space-y-2">
              <li>MILLS menjual product Apparel Olahraga.</li>
            </ul>
          </li>
          <li>
            Seluruh product MILLS di produksi dimana ?{" "}
            <ul className="text-xs mt-2 pl-0 space-y-2">
              <li>
                Seluruh product MILLS adalah produksi Lokal atau Made In
                Indonesia.
              </li>
            </ul>
          </li>
          <li>
            Bagaimana dengan kualitas Product MILLS ?{" "}
            <ul className="text-xs mt-2 pl-0 space-y-2">
              <li>
                Kualitas Product MILLS adalah Kualitas Internasional dengan
                standar produksi mengikuti standar produksi Global dengan pabrik
                besar dan bukan rumahan.
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="md:max-w-[70%] lg:max-w-[50%] mt-10">
        <p className="text-xs">FAQ ORDER</p>

        <ul className="list-disc text-xs mt-6 pl-8 space-y-2">
          <li>
            Bagaimana cara order di MILLS?
            <ul className="text-xs mt-2 pl-0 space-y-2">
              <li>
                Untuk melakukan pemesanan di MILLS, dapat melihat panduan di
                highlight Instagram @millssportid "HOW TO ORDER" atau click
                tautan ini{" "}
                <a href="https://www.mills.co.id/Quick_Links/how-to-order">
                  https://www.mills.co.id/Quick_Links/how-to-order.
                </a>
                Jika kalian masih belum paham dan butuh bantuan, silahkan
                hubungi admin kami: pada nomor admin 1 : +62 813-1769-4903 ,
                admin 2 : +62 821-2316-8787 admin kami siap membantu kalian.
              </li>
            </ul>
          </li>
          <li>
            Bagaimana cara konfirmasi pembayaran setelah transfer?
            <ul className="text-xs mt-2 pl-0 space-y-2">
              <li>
                Setelah melakukan transfer, kalian dapat melakukan konfirmasi
                pembayaran di halaman CONFIRM PAYMENT atau click tautan ini
                <a href="https://www.mills.co.id/payment_notif">
                  https://www.mills.co.id/payment_notif.
                </a>
              </li>
            </ul>
          </li>
          <li>
            Mengapa orderan saya di cancel?
            <ul className="text-xs mt-2 pl-0 space-y-2">
              <li>
                Untuk kasus orderan di cancel ada beberapa faktor, diantaranya:
                MILLS mengunakan sistem direct transfer sehingga customer
                diwajibkan konfirmasi pembayaran setelah transfer sehingga jika
                customer terlambat/tidak konfirmasi pembayaran di website
                setelah transfer sehingga orderannya (expired/cancelled)
                dibatalkan otomatis oleh sistem. <br /> <br /> Dalam kasus ini,
                customer diarahkan untuk konfirmasi langsung ke admin WA MILLS.
                Jika orderan masih tersedia, customer akan diminta order ulang
                kembali, namun jika produk yang diinginkan sudah habis, customer
                dapat menukar barang yang diinginkan atau kami akan melakukan
                refund. <br /> <br /> Customer tidak melakukan
                pembayaran/transfer <br /> <br /> Uang yang dikirimkan customer
                tidak masuk ke rekening kami (hal ini biasa terjadi karena saat
                melakukan transfer, koneksi internet customer terputus sehingga
                uang yang customer kirimkan tidak masuk. Dalam kasus ini, biasa
                admin kami akan meminta customer menghubungi langsung bank
                terkait. <br /> <br /> Customer salah memasukan email/typo
                sehingga customer tidak mendapatkan email pembelian dan pesanan
                dibatalkan otomatis oleh system.
              </li>
            </ul>
          </li>
          <li>
            Mengapa orderan saya di dalam keranjang bisa hilang secara
            tiba-tiba?
            <ul className="text-xs mt-2 pl-0 space-y-2">
              <li>
                Jika orderan kalian masih ada di dalam keranjang dan belum
                sampai tahap clik place order, maka sangat memungkinkan orderan
                kalian hilang karena diambil oleh customer lain. Sehingga kami
                sarankan agar kalian register akun/login saat belanja agar
                menghemat waktu saat proses belanja (tidak perlu mengisi data
                diri lagi pada halaman place order jika sudah register atau
                login)
              </li>
            </ul>
          </li>
          <li>
            Mengapa ada tulisan invalid shipping pada halaman place order?
            <ul className="text-xs mt-2 pl-0 space-y-2">
              <li>
                Kalian tidak diperbolehkan mengisi city/district, state/province
                dengan manual atau diketik sendiri, kalian wajib memilih sesuai
                pilihan yang tersedia.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Div>
  );
};

export default Faq;
