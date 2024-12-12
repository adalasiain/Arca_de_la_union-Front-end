import React from 'react';

const CartSummary = ({ subtotal, shipping, total }) => {
  return (
    <div className="shadow bg-white p-5 border-1 border-gray-900 rounded-xl md:mt-20 md:max-w-sm">
      <div className="flex justify-between">
        <h4 className="text-xl font-bold text-gray-500">Subtotal</h4>
        <p className="text-2xl font-bold">${subtotal}</p>
      </div>
      <div className="flex justify-between">
        <h4 className="text-xl font-bold text-gray-500">Envio</h4>
        <p className="text-2xl font-bold">${shipping}</p>
      </div>
      <hr className="h-px my-4 bg-gray-200 border-0" />
      <div className="flex justify-between">
        <h4 className="text-xl font-bold">Total</h4>
        <p className="text-2xl font-bold">${total}</p>
      </div>
      <button type="button" className="w-full text-white bg-[#b87333] hover:bg-[#a27648] focus:ring focus:outline-none focus:ring-[#895c23] text-lg rounded-full px-8 py-2.5 me-2 mt-4 mb-2 flex justify-center items-center space-x-2">
        <span className="font-bold">Pagar</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 56 56"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M28 4c13.255 0 24 10.745 24 24S41.255 52 28 52S4 41.255 4 28S14.745 4 28 4m0 4C16.954 8 8 16.954 8 28s8.954 20 20 20s20-8.954 20-20S39.046 8 28 8m.573 6.286v2.687c3.976.319 6.855 2.704 6.982 6.314h-3.308c-.207-2.004-1.638-3.165-3.674-3.419V26.5l.764.19c4.183.971 6.473 2.689 6.473 6.076c0 3.897-3.181 6.107-7.237 6.394v2.671h-1.797V39.16c-4.04-.303-7.236-2.577-7.347-6.394h3.292c.286 1.861 1.495 3.229 4.055 3.5V29.33l-.652-.16c-4.04-.937-6.218-2.75-6.218-5.979c0-3.563 2.862-5.916 6.87-6.219v-2.687zm0 15.458v6.537c2.72-.207 3.865-1.495 3.865-3.197c0-1.638-.89-2.608-3.865-3.34m-1.797-9.876c-2.29.286-3.499 1.606-3.499 3.054s.955 2.512 3.5 3.149z"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartSummary;