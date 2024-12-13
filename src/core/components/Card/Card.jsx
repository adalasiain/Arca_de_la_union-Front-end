import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import ProductosService from "../../../services/ProductosServices";

const Card = ({ material, tamanio, acabado, stock, precio, image, isCustom, onAddToCart, onCustomize }) => {
  return (
    <div className="flex flex-col items-center bg-[#eeeeee] rounded-3xl p-4 shadow-lg min-w-72 sm:min-w-60">
      {/* Imagen del producto */}
      <div className="flex justify-center w-full bg-[#d8d9de] rounded-3xl">
        <img
          src={image?.url || 'https://via.placeholder.com/150'}
          alt={material}
          className="rounded-lg object-cover w-auto max-w-[207px] h-40"
        />
      </div>

      {/* Detalles del producto */}
      {isCustom ? (
      <div className="mt-3 text-center max-w-[207px]">
          <h2 className="font-bold text-gray-800">¡Personaliza tu producto!</h2>
          <p>Haz que sea único</p>
          <p>¡Elige todos los detalles!</p>
          <button 
            onClick={onCustomize}
            className="mt-4 text-white text-center uppercase font-bold bg-[#ee9f05] hover:bg-[#be8d2e] focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full px-4 py-2.5"
          >
            <div className="flex items-center justify-center">
              <p>Personalizar</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-2" viewBox="0 0 20 20">
                <path fill="currentColor" d="M18.33 3.57s.27-.8-.31-1.36c-.53-.52-1.22-.24-1.22-.24c-.61.3-5.76 3.47-7.67 5.57c-.86.96-2.06 3.79-1.09 4.82c.92.98 3.96-.17 4.79-1c2.06-2.06 5.21-7.17 5.5-7.79M1.4 17.65c2.37-1.56 1.46-3.41 3.23-4.64c.93-.65 2.22-.62 3.08.29c.63.67.8 2.57-.16 3.46c-1.57 1.45-4 1.55-6.15.89"/>
              </svg>
            </div>
          </button>
      </div>
      ) : (
        <div className="mt-4 text-center max-w-[207px]">
          <ul className="text-gray-800 text-sm font-medium mt-2">
            <li><strong>Material:</strong> {material}</li>
            <li><strong>Tamaño:</strong> {tamanio}</li>
            <li><strong>Acabado:</strong> {acabado}</li>
            <li><strong>Stock:</strong> {stock}</li>
          </ul>
        </div>
      )}

      {/* Precio y Botón */}
      {!isCustom && (
        <div className="flex items-center justify-around w-full mt-4">
          <button
            onClick={() => onAddToCart({ material, tamanio, acabado, precio, imagen: image?.url })}
            className="text-white text-center uppercase font-bold bg-[#ee9f05] hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-sm px-4 py-2"
          >
            Comprar
          </button>
          <span className="text-xl font-bold text-gray-900">
            ${precio}
          </span>
        </div>
      )}
    </div>
  );
};

const CardList = ({ filter, searchTerm, onCustomize }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const productosService = new ProductosService();

  // Cargar productos del endpoint
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await productosService.GetProductsList();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  // Cargar el carrito desde LocalStorage al iniciar
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  // Guardar el carrito en LocalStorage cada vez que cambia
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const filteredCards = products.filter((card) => {
    const matchesFilter = filter === "all" || card.acabado.toLowerCase() === filter.toLowerCase();;
    const matchesSearch =
      card.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.tamanio.toString().includes(searchTerm) ||
      card.acabado.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.stock.toString().includes(searchTerm) ||
      card.precio.toString().includes(searchTerm);
   
    return matchesFilter && matchesSearch;
  });

  const addToCart = (product) => {
    setCart([...cart, product]);
  }

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handlePayment = () => {
    // Redirigir al enlace de WhatsApp con la información del carrito
    const cartMessage = cart.map(item => `${item.material} - ${item.tamanio} - $${item.precio}`).join('%0A');
    const whatsappLink = `https://api.whatsapp.com/send/?phone=527711980579&text=Hola,+deseo+comprar+los+siguientes+artículos+de+mi+carrito.%0ACarrito:%0A${cartMessage}&type=phone_number&app_absent=0`;
    window.location.href = whatsappLink;

    // Borrar el carrito de LocalStorage después de pagar
    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <div className="relative">
      {/* Botón para abrir/cerrar carrito */}
      <button 
        onClick={toggleCart}
        className="fixed top-4 right-4 bg-[#ee9f05] text-white p-3 rounded-full z-50 shadow-lg hover:bg-[#be8d2e]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {cart.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
            {cart.length}
          </span>
        )}
      </button>

      {/* Carrito de Compras */}
      {isCartOpen && (
        <div className="fixed top-0 right-0 w-[95%] max-w-96 h-full bg-[#eeeeee] shadow-lg p-6 z-50 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold pb-2 border-b">Carrito de Compras</h2>
            <button 
              onClick={toggleCart}
              className="text-gray-600 hover:text-red-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {cart.length === 0 ? (
            <p className="text-gray-500">Tu carrito está vacío</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b py-2">
                  <div>
                    <img src={item.imagen} alt="Producto" className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">{item.material} - {item.tamanio}</p>
                    <p className="text-gray-500 text-sm">${item.precio}</p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(index)} 
                    className="text-red-500 hover:text-red-700"
                  >
                    Eliminar
                  </button>
                </div>
              ))}
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xl font-bold">Total:</span>
                <span className="text-xl font-bold">${cart.reduce((sum, item) => sum + item.precio, 0)}</span>
              </div>
              <button onClick={handlePayment} className="flex items-center justify-center w-full mt-6 text-white text-lg font-bold py-3 rounded-full bg-[#b87333] hover:bg-[#a27648] focus:ring focus:outline-none focus:ring-[#895c23]">
                <p className="mr-2">Pagar</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" d="M12 6v12m3-8.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5s3 1.12 3 2.5s-1.343 2.5-3 2.5s-3-1.12-3-2.5"/></g>
                </svg>
              </button>
            </>
          )}
        </div>
      )}

      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 px-2 py-8">
          <Link to="/customize-product" >
            <Card
              image={{ url: "https://cdn-icons-png.flaticon.com/512/4226/4226577.png" }}
              isCustom={true}
              onCustomize={onCustomize}
            />
          </Link>
          
          {filteredCards.map((card) => (
            <Card 
              key={card.id} 
              {...card} 
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;