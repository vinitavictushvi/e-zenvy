import React, { useContext } from 'react'
import './Cart.css'
import { ShopContext } from '../Context/ShopContext'

const Cart = () => {
  const {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    getTotalCartAmount,
  } = useContext(ShopContext)

  return (
    <div className="cart">
      <h1 className="cart-title">🛍️ Your Cart</h1>

      <div className="cart-container">
        {/* LEFT */}
        <div className="cart-items">
          {all_product.map((item) => {
            if (cartItems[item.id] > 0) {
              return (
                <div key={item.id} className="cart-card">
                  <img src={item.image} alt={item.name} className="cart-img" />

                  <div className="cart-info">
                    <h3 className="cart-name">{item.name}</h3>

                    <div className="price">
                      ₹{item.new_price.toFixed(2)}
                      <span className="old-price">₹{item.old_price.toFixed(2)}</span>
                    </div>

                    <div className="qty">
                      <button onClick={() => removeFromCart(item.id)}>-</button>
                      <span>{cartItems[item.id]}</span>
                      <button onClick={() => addToCart(item.id)}>+</button>
                    </div>
                  </div>

                  <button
                    className="delete"
                    onClick={() => deleteFromCart(item.id)}
                  >
                    ✕
                  </button>
                </div>
              )
            }
            return null
          })}
        </div>

        {/* RIGHT */}
        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-line">
            <p>Total Amount</p>
            <span>₹{getTotalCartAmount().toFixed(2)}</span>
          </div>

          <button className="checkout-btn">
            Checkout Securely
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
