import React, { useContext } from 'react'
import './ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)

  return (
    <div className='shop-category'>
      
      {/* Banner */}
      <img className='shopcategory-banner' src={props.banner} alt="" />

      {/* Index & Sort */}
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1–12</span> out of {all_product.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (item.category === props.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            )
          } else {
            return null
          }
        })}
      </div>

      <div className="shopcategory-loadmore">
        Explore More
      </div>

    </div>
  )
}

export default ShopCategory
