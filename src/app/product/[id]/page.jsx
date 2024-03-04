import Div from '@/components/helper/Div';
import ProductDescriptions from '@/components/pages/detail product/ProductDescriptions';
import ProductImage from '@/components/pages/detail product/ProductImage';
import Title from '@/components/title component/Title';
import React from 'react'

const DetailProduct = () => {
  return (
    <Div wrap>
      <Div wrap maxWidth>
        <Title title={"detail produk"} />

        <Div wrap className="mt-10 px-4">
          {/* photo */}
          <ProductImage/>

          {/* description */}
          <ProductDescriptions/>
        </Div>
      </Div>
    </Div>
  )
}

export default DetailProduct;