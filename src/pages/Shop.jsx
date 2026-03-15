import React from 'react';

function Shop() {
  const products = [
    { id: 1, name: 'Album CD', price: '$15', image: '/product1.jpg' },
    { id: 2, name: 'Vinyl Record', price: '$30', image: '/product2.jpg' },
    { id: 3, name: 'T-Shirt', price: '$25', image: '/product3.jpg' },
    { id: 4, name: 'Poster', price: '$10', image: '/product4.jpg' },
  ];

  return (
    <div className="page-container">
      <h1>Shop</h1>
      <div className="shop-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;