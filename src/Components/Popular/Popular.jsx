import React from 'react'
import './Popular.css'
import Item from '../Item/Item'
import data_product from '../../Assets/data'

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR PRODUCTS</h1>
      <hr />

      {/* GRID CONTAINER */}
      <div className="items-container">
        {data_product.map((item, i) => (
          <Item
             key={i}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  )
}

export default Popular
