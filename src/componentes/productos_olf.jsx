import React, { useState } from "react";
import { Home } from 'lucide-react';
import { BiSolidOffer } from "react-icons/bi";
import { Plus, X } from 'lucide-react';
import { FaHome } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const productsMock = [
  {
    id: 1,
    image: "https://i.pinimg.com/originals/1a/02/ef/1a02ef78938f025cbecf8e42d7e983af.jpg",
    material: "Plata",
    size: "80 x 70 cm",
    kilataje: "18 Kilates",
    price: 100,
  },
  {
    id: 2,
    image: "https://i.pinimg.com/originals/1a/02/ef/1a02ef78938f025cbecf8e42d7e983af.jpg",
    material: "Oro",
    size: "100 x 50 cm",
    kilataje: "18 Kilates",
    price: 200,
  },
];

const ProductCard = ({ product, onEdit }) => (
  <div className="bg-[#b87333] rounded-lg shadow p-4 text-center">
    <img
      src={product.image}
      alt="Campana"
      className="mx-auto h-32 w-32 object-contain"
    />
    <div className="mt-4 text-sm">
      <p><strong>Material:</strong> {product.material}</p>
      <p><strong>Tamaño:</strong> {product.size}</p>
      <p><strong>Kilataje:</strong> {product.kilataje}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
    </div>
    <button
      className="bg-orange-500 text-white py-1 px-4 mt-4 rounded hover:bg-orange-600"
      onClick={() => onEdit(product)}
    >
      Editar
    </button>
  </div>
);

const EditModal = ({ isOpen, product, onClose, onSave }) => {
  const [formData, setFormData] = useState(product || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-2xl font-bold mb-4">Editar Producto</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Material</label>
            <input
              type="text"
              name="material"
              value={formData.material || ""}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Tamaño</label>
            <input
              type="text"
              name="size"
              value={formData.size || ""}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Kilataje</label>
            <input
              type="text"
              name="kilataje"
              value={formData.kilataje || ""}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Precio</label>
            <input
              type="number"
              name="price"
              value={formData.price || ""}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>
        </form>
        <div className="flex justify-between mt-6">
          <button
            onClick={onClose}
            className="bg-gray-400 text-white py-1 px-4 rounded hover:bg-gray-500"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

const AddProductModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    image: "",
    material: "",
    size: "",
    kilataje: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (!formData.image || !formData.material || !formData.size || !formData.kilataje || !formData.price) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const newProduct = {
      ...formData,
      id: Date.now(),
      price: parseFloat(formData.price),
    };

    onSave(newProduct);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-2xl font-bold mb-4">Agregar Nuevo Producto</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Imagen (URL)</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Material</label>
            <input
              type="text"
              name="material"
              value={formData.material}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Tamaño</label>
            <input
              type="text"
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Kilataje</label>
            <input
              type="text"
              name="kilataje"
              value={formData.kilataje}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Precio</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>
        </form>
        <div className="flex justify-between mt-6">
          <button
            onClick={onClose}
            className="bg-gray-400 text-white py-1 px-4 rounded hover:bg-gray-500"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

const Productos_olf = () => {
  const [products, setProducts] = useState(productsMock);
  const [searchQuery, setSearchQuery] = useState(""); // Estado para la barra de búsqueda
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === updatedProduct.id ? updatedProduct : p
      )
    );
    setIsEditModalOpen(false);
  };

  // Filtrar productos según la barra de búsqueda
  const filteredProducts = products.filter((product) =>
    product.material.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen">
      <header className="bg-base text-white relative h-16 w-full">
        <nav className="container mx-auto flex items-center justify-between px-32 py-2">
          <Link to="/dashboard" className=""  >
            <button className="bg-white hover:bg-letras p-3 rounded-full">
              <Home className="h-6 w-6 text-base" />
            </button>
          </Link>
          <Link to="/productosCampanas" className=""  >
            <button className="text-2xl font-serif w-40 flex justify-center text-letras">
              <FaBoxes className="mr-2 mt-1" />
              Productos
            </button>
          </Link>
          <Link to="/ventas" className=""  >
            <button className="text-2xl font-serif w-40 flex justify-center hover:text-letras">
              <GiMoneyStack className="mr-2 mt-1" />
              Ventas
            </button>
          </Link>
          <Link to="/" className=""  >
            <button className="text-2xl font-serif w-40 flex justify-center hover:text-letras">
              <BiLogOut className="mr-2 mt-1" />
              Salir
            </button>
          </Link>
        </nav>
      </header>


      <section className="py-3 mt-4 mb-4 flex justify-center space-x-6 ">
        
        <button
          className='bg-base flex rounded-full text-white text-center absolute right-20'>
          <p className='pl-3 pt-[6px]'>Agregar producto</p>
          <p className='bg-letras ml-2 w-10 h-10 rounded-full text-2xl flex items-center justify-center'
            onClick={() => setIsAddModalOpen(true)}

          >
            <Plus className='w-6 h-6' />
          </p>
        </button>

        <nav className='flex justify-center'>
          <Link to="/productosCampanas" className="p-2"  >
            <button
              className="px-6 py-2 text-sm font-medium rounded-full transition bg-white text-base border border-base hover:shadow hover:bg-base hover:text-white"
              onClick={() => console.log("Botón clicado")}>
              Campanas
            </button>
          </Link>
          <Link to="/productosImagenes" className="p-2"  >
            <button
              className="px-6 py-2 text-sm font-medium rounded-full transition bg-white text-base border border-base hover:shadow hover:bg-base hover:text-white"
              onClick={() => console.log("Botón clicado")}>
              Imagenes
            </button>
          </Link>
          <Link to="/productosOlfebreria" className="p-2"  >
            <button
              className="px-6 py-2 text-sm font-medium rounded-full transition border border-base hover:shadow bg-base text-white"
              onClick={() => console.log("Botón clicado")}>
              Orfebreria
            </button>
          </Link>
        </nav>
      </section>

      <div className="w-full max-w-6xl mx-auto  px-4">
        <div className="flex justify-between items-center">
          {/* Barra de Búsqueda */}
          <div className="flex items-center bg-orange-100 rounded-md px-4 py-2 shadow w-auto">
            <input
              type="text"
              placeholder="Buscar Producto"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent focus:outline-none w-full"
            />
            <IoSearchSharp className="h-6 w-6 text-white" />
          </div>

        </div>
      </div>




      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 max-w-6xl mx-auto">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onEdit={handleEdit} />
        ))}
      </div>

      {/* Modales */}
      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleAddProduct}
      />
      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSaveEdit}
        product={selectedProduct}
      />
    </div>
  );
};

export default Productos_olf;
