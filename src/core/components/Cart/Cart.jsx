import React from 'react';
import CartItem from '../CartItem/CartItem';
import CartSummary from '../CartSummary/CartSummary';

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      itemName: 'Producto A',
      material: 'Bronce',
      price: 2500.00,
      imgSrc: 'https://cdn-icons-png.flaticon.com/512/570/570975.png',
    },
    {
      id: 2,
      itemName: 'Producto B',
      material: 'Niquel',
      price: 4500.00,
      imgSrc: 'https://cdn-icons-png.flaticon.com/512/570/570975.png',
    },
    {
      id: 3,
      itemName: 'Producto C',
      material: 'Cobre',
      price: 1500.00,
      imgSrc: 'https://cdn-icons-png.flaticon.com/512/570/570975.png',
    }, 
    {
      id: 4,
      itemName: 'Producto D',
      material: 'Acero',
      price: 5100.00,
      imgSrc: 'https://cdn-icons-png.flaticon.com/512/570/570975.png',
    },
    // Aquí podrías agregar más productos si es necesario.
  ];

  const deleteItem = (id) => cartItems.filter((item) => item.id !== id)

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const shipping = 500;
  const total = subtotal + shipping;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 bg-gray-100">
      <div className="col-span-2 md:col-span-2 md:p-8">
        <div className="px-5 pt-5">
          <h1 className="text-2xl font-bold">Carrito de Compras:</h1>
        </div>
        <hr className="h-px my-4 bg-gray-200 border-0" />
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            itemName={item.itemName}
            material={item.material}
            price={item.price}
            imgSrc={item.imgSrc}
            item={item}
            delete={deleteItem}
          />
        ))}
      </div>
      <div className="col-span-1 px-8 pb-5 md:p-0 md:mr-5">
        <CartSummary subtotal={subtotal} shipping={shipping} total={total} />
      </div>
    </div>
  );
};

export default Cart;