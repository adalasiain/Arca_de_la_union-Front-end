import React, { useState } from "react";

import { DollarSign, Edit, Home, LucidePenTool, Paintbrush, Ruler } from 'lucide-react';
import { Plus, X } from 'lucide-react';
import { BiSolidOffer } from "react-icons/bi";
import { FaBoxes } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Header from "./Header";

const productsMock = [
  {
    id: 1,
    image: "https://www.bazzarbog.com/34874-large_default/figuras-religiosas-en-yeso-pintadas-a-mano-25-cm-alto.jpg",
    material: "Yeso",
    size: "80 x 70 cm",
    finish: "Acrilica",
    price: 100,
  },
  {
    id: 2,
    image: "https://www.bazzarbog.com/34874-large_default/figuras-religiosas-en-yeso-pintadas-a-mano-25-cm-alto.jpg",
    material: "Cemento",
    size: "100 x 50 cm",
    finish: "Acrilica",
    price: 200,
  },
];

const ProductCard = ({ product, onEdit }) => (
  <div className="bg-white rounded-xl shadow-lg shadow-amber-200 p-6">
  {/* Imagen del producto */}
  <div className="flex justify-center rounded shadow-md border mb-4  ">
    <img
      src={product.image}
      alt="Campana"
      className="w-4/5 h-auto object-contain rounded-lg"
    />
  </div>

  {/* Información del producto */}
  <div className="space-y-2 text-gray-700">
    <p className="text-lg font-bold flex items-center gap-2">
      <LucidePenTool className="text-amber-500" />
      Material: <span className="font-normal">{product.material}</span>
    </p>
    <p className="text-lg font-bold flex items-center gap-2">
      <Ruler className="text-amber-500" />
      Tamaño: <span className="font-normal">{product.size}</span>
    </p>
    <p className="text-lg font-bold flex items-center gap-2">
      <Paintbrush className="text-amber-500" />
      Acabado: <span className="font-normal">{product.finish}</span>
    </p>
    <p className="text-lg font-bold flex items-center gap-2">
      <DollarSign className="text-amber-500" />
      Precio: <span className="font-normal">${product.price}</span>
    </p>
  </div>

  {/* Botón de acción */}
  <div className="mt-4 flex justify-end">
    <button
      className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
      onClick={() => onEdit(product)}
    >
      <Edit />
      Editar
    </button>
  </div>
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
    <div className="  min-h-screen bg-amber-100 w-screen">
      <Header />
      <section className="py-4 px-10  w-full mb-4 flex justify-between space-x-6 ">
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
              className="px-6 py-2 text-sm font-medium rounded-full transition border border-base hover:shadow bg-base text-white"
              onClick={() => console.log("Botón clicado")}>
              Imagenes
            </button>
          </Link>
          <Link to="/productosOlfebreria" className="p-2"  >
            <button
              className="px-6 py-2 text-sm font-medium rounded-full transition bg-white text-base border border-base hover:shadow hover:bg-base hover:text-white"
              onClick={() => console.log("Botón clicado")}>
              Orfebreria
            </button>
          </Link>
        </nav>
        <button
          className='bg-base flex rounded-full h-10 text-white text-center items-center  '
          onClick={() => setIsAddModalOpen(true)}
        >
          <p className="px-2 text-lg font-bold" >Agregar producto</p>
          <Plus className='bg-letras h-full w-auto rounded-full ' />

        </button>
      </section>

      <div className="w-full max-w-6xl mx-auto  px-4">
        <div className="flex justify-between items-center">
          {/* Barra de Búsqueda */}
          <div className="flex items-center bg-orange-100 rounded-md px-4 py-2 shadow w-auto">
            <input
              type="text"
              placeholder="Buscar Material"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent focus:outline-none w-full"
            />
            <IoSearchSharp className="h-6 w-6 text-white" />
          </div>

        </div>
      </div>



      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 px-10 ">
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
