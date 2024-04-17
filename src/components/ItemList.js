// ItemList.js

import React from 'react';
import Item from './Item';

const ItemList = ({ products }) => {
  return (
    <div className="item-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {products.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
