import React from "react";

import Div from "@/components/helper/Div";

const PaymentMethods = () => {
  return (
    <Div full className="w-full flex flex-col items-center">
      <div className="md:max-w-[70%] lg:max-w-[50%]">
        <ul className="list-disc text-xs mt-6 pl-8 space-y-2">
          <li>
            Untuk Bank Transfer, flow Order status adalah sebagai berikut:
            <ul className="list-decimal text-xs mt-6 pl-8 space-y-2">
              <li>Order diterima dari website, Status Order adalah Pending</li>
              <li>
                Customer melakukan Konfirmasi Pembayaran melalui Toko Online
                Anda, Status Order akan menjadi Verifying Payment
              </li>
              <li>
                Anda mengecek pembayaran dan meng-confirm bahwa pembayaran telah
                diterima. Status Order akan menjadi Processing
              </li>
              <li>
                Jikalau customer tidak melakukan Verifying Payment, dari admin
                perlu mengubah statusnya di admin panel menjadi Verifying
                Payment sebelum diubah menjadi Processing apabila pembayarannya
                sudah benar-benar masuk ke rekening.
              </li>
              <li>
                Anda mengirim barangnya. Status Order akan menjadi Shipped
              </li>
              <li>
                Di dalam kasus di mana Anda meng-Cancel Order. Status Order akan
                menjadi Cancelled
              </li>
            </ul>
          </li>

          <li>
            Untuk Pembayaran otomatis (contoh: Kartu Kredit, E-Banking, Paypal),
            flow Status Order adalah sebagai berikut:
            <ul className="list-decimal text-xs mt-6 pl-8 space-y-2">
              <li>
                Order diterima dari Toko Online Anda, pembayaran dilakukan
                secara otomatis. Status Order Anda akan langsung menjadi
                Processing
              </li>
              <li>
                Anda mengirim barangnya. Status Order akan menjadi Shipped
              </li>
              <li>
                Di dalam kasus di mana Anda meng-Cancel Order. Status Order akan
                menjadi Cancelled
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Div>
  );
};

export default PaymentMethods;
