import React, { useState } from 'react';
import Cart from './Cart';
import CardList from './CardList';

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    // Verifica si el producto ya está en el carrito
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-grow">
        <CardList addToCart={addToCart} />
      </div>
      <div className="w-full md:w-1/3">
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      </div>
    </div>
  );
};

export default Shop;
