import React from 'react'

import Div from '@/components/helper/Div'
import AboutUs from '@/components/pages/article/AboutUs'
import ExchangeAndReturn from '@/components/pages/article/ExhangeAndReturn'
import Faq from '@/components/pages/article/Faq'
import HowToOrder from '@/components/pages/article/HowToOrder'
import PaymentMethods from '@/components/pages/article/PaymentMethods'
import PrivacyPolicy from '@/components/pages/article/PrivacyPolicy'
import ShippingMethods from '@/components/pages/article/ShippingMethods'
import Title from '@/components/title component/Title'
import { FaFacebook, FaLinkedin, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const ArticleDetail = ({params}) => {
let title = params.slug

  return (
    <>
      <Div wrap className="bg-gradient-to-b from-yellow-50 to-white px-4">
        <Div
          wrap
          className="w-full max-w-screen-maxxx min-h-[80vh] md:min-h-[50vh] lg:min-h-[50vh]"
        >
          <Title title={title} />

          <div className="mt-14 w-full">
            {title == "about-us" && <AboutUs />}
            {title == "about-mills" && <AboutUs />}
            {title == "how-to-order" && <HowToOrder />}
            {title == "shipping-methods" && <ShippingMethods />}
            {title == "payment-methods" && <PaymentMethods />}
            {title == "faq" && <Faq />}
            {title == "privacy-policy" && <PrivacyPolicy />}
            {title == "exchange-and-return" && <ExchangeAndReturn />}
            {title == "terms-and-conditions" && <ExchangeAndReturn />}
            <ListSosmed />
          </div>
        </Div>
      </Div>
    </>
  );
}

export default ArticleDetail

export const ListSosmed = () => {
  return (
    <div className="w-full flex flex-col gap-2 mt-10">
      <h1 className="font-bold text-sm">Bagikan</h1>

      {/* list sosmed */}
      <div className="flex items-center gap-4">
        <FaFacebook size={22} className="cursor-pointer text-gray-700" />
        <FaTwitter size={22} className="cursor-pointer text-gray-700" />
        <FaLinkedin size={22} className="cursor-pointer text-gray-700" />
        <FaWhatsapp size={22} className="cursor-pointer text-gray-700" />
        <MdEmail size={22} className="cursor-pointer text-gray-700" />
        <FaTelegram size={22} className="cursor-pointer text-gray-700" />
      </div>
    </div>
  );
}