import React from 'react';
import './RelatedProducts.css';
import data_product from '../../Assets/data';
import Item from '../Item/Item';

const RelatedProducts = ({ currentProductId, currentCategory }) => {
  const related = data_product
    .filter(item => item.id !== currentProductId && item.category === currentCategory)
    .slice(0, 6);

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-items">
        {related.map((item) => (
          <Item 
            key={item.id}  
            id={item.id}
            image={item.image}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
