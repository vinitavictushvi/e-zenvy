import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

const Product = () => {
  const { all_product } = useContext(ShopContext)
  const { productId } = useParams()

  if (!all_product || all_product.length === 0) {
    return <div>Loading...</div>
  }

  const product = all_product.find(
    (e) => String(e.id) === String(productId)
  )

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product
