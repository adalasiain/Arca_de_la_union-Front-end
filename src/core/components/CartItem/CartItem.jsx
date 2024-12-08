import React, { useState } from 'react';

const CartItem = ({ itemName, material, price, imgSrc }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="flex p-5 max-w-[800px]">
      <div className="flex items-center justify-center w-24 h-24 mr-5">
        <img src={imgSrc} className="w-full h-full object-contain" alt="Producto" />
      </div>
      <div className="grid grid-cols-2 items-center justify-items-between w-full sm:flex sm:items-center sm:justify-between">
        <div className="flex flex-col">
          <h5 className="text-lg font-bold">{itemName}</h5>
          <div className="flex flex-col md:flex-row">
            <p className="mr-2 font-semibold">Material:</p>
            <p>{material}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative flex items-center md:max-w-[8rem] mb-1">
            <button onClick={decrement} className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11">
              <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
              </svg>
            </button>
            <input type="text" value={quantity} className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm w-full" readOnly />
            <button onClick={increment} className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11">
              <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
              </svg>
            </button>
          </div>
          <button type="button" className="flex items-center justify-center w-full font-medium rounded-full text-sm text-center bg-gray-200 hover:bg-gray-300 focus:ring focus:outline-none focus:ring-gray-400 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" className="mr-2" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/>
            </svg>
            <p className="font-bold">Borrar</p>
          </button>
        </div>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default CartItem;