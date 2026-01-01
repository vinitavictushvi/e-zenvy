import React, { useState, useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../../Assets/star_icon.png'
import star_dull_icon from '../../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = ({ product }) => {
  const [mainImage, setMainImage] = useState(product?.image)
  const [selectedSize, setSelectedSize] = useState('M')
  const { addToCart } = useContext(ShopContext)
  const [wishlist, setWishlist] = useState(false)

  if (!product) return <div>Loading...</div>

  return (
    <div className="productdisplay">

      {/* LEFT */}
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {[product.image, product.image, product.image, product.image].map(
            (img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className={mainImage === img ? 'active' : ''}
                onClick={() => setMainImage(img)}
              />
            )
          )}
        </div>

        <div className="productdisplay-img">
          <img src={mainImage} alt="" />
        </div>
      </div>

      {/* RIGHT */}
      <div className="productdisplay-right">
        <h1>{product.name}</h1>

        <div className="rating">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <span>4.2 (123 reviews)</span>
        </div>

        <div className="prices">
          <span className="old">₹{product.old_price}</span>
          <span className="new">₹{product.new_price}</span>
        </div>

        <p className="description">
          Premium quality fashion wear designed for comfort and elegance.
          Perfect for daily wear and special occasions.
        </p>

        {/* SIZE */}
        <div className="sizes">
          <p>Select Size</p>
          <div className="size-options">
            {['S', 'M', 'L', 'XL'].map((size) => (
              <span
                key={size}
                className={selectedSize === size ? 'active' : ''}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        {/* wishlist */}

        <div className="title-wishlist">
          <h1>{product.name}</h1>
          <span
            className="wishlist"
            onClick={() => setWishlist(!wishlist)}
          >
            {wishlist ? '❤️' : '🤍'}
          </span>
        </div>

        {/* BUTTON */}
        <button
          className="add-btn"
          onClick={() => addToCart(product.id)}
        >
          ADD TO CART
        </button>

        {/* EXTRA INFO */}
        <div className="meta">
          <p><b>Category:</b> Women Fashion</p>
          <p><b>Tags:</b> Modern, Trending, Stylish</p>
        </div>

      </div>
    </div>
  )
}

export default ProductDisplay
