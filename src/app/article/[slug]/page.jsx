import Div from '@/components/helper/Div'
import AboutUs from '@/components/pages/article/AboutUs'
import Faq from '@/components/pages/article/Faq'
import HowToOrder from '@/components/pages/article/HowToOrder'
import PaymentMethods from '@/components/pages/article/PaymentMethods'
import ShippingMethods from '@/components/pages/article/ShippingMethods'
import Title from '@/components/title component/Title'
import React from 'react'
import { FaFacebook, FaLinkedin, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const ArticleDetail = ({params}) => {
let title = params.slug

  return (
    <>
      <Div
        flex
        column
        itemsCenter
        full
        className="bg-gradient-to-b from-yellow-50 to-white pt-14 px-4"
      >
        <div className="w-full flex flex-col items-center max-w-screen-maxxx min-h-[80vh] md:min-h-[50vh] lg:min-h-[90vh]">
          <Title title={title} />

          <div className="mt-14 w-full">
            {title == 'about-us' && <AboutUs/>}
            {title == 'how-to-order' && <HowToOrder/>}
            {title == 'shipping-methods' && <ShippingMethods/>}
            {title == 'payment-methods' && <PaymentMethods/>}
            {title == 'faq' && <Faq/>}
            <ListSosmed />
          </div>
        </div>
      </Div>
    </>
  );
}

export default ArticleDetail

const ListSosmed = () => {
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