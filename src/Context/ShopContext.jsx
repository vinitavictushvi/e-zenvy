import React, { createContext, useState } from 'react'
import all_product from '../Assets/all_product'

export const ShopContext = createContext(null)

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({})

  // ➕ ADD TO CART
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }))
  }

  // ➖ REMOVE ONE ITEM
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev
      return {
        ...prev,
        [itemId]: prev[itemId] - 1,
      }
    })
  }

  // ❌ DELETE ITEM COMPLETELY
  const deleteFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev }
      delete updatedCart[itemId]
      return updatedCart
    })
  }

  // 💰 TOTAL CART AMOUNT
  const getTotalCartAmount = () => {
    let total = 0
    for (const itemId in cartItems) {
      const product = all_product.find(
        (p) => p.id === Number(itemId)
      )
      if (product) {
        total += product.new_price * cartItems[itemId]
      }
    }
    return total
  }

  // 🧮 TOTAL ITEMS COUNT
  const getTotalCartItems = () => {
    let total = 0
    for (const itemId in cartItems) {
      total += cartItems[itemId]
    }
    return total
  }

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  }

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
