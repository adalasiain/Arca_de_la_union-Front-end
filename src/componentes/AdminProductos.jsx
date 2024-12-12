import React, { useEffect, useState } from "react";

import { Bell, DollarSign, Edit, Home, LucidePenTool, Paintbrush, Ruler, Scale, Trash } from 'lucide-react';
import { Plus, X } from 'lucide-react';
import { BiSolidOffer } from "react-icons/bi";
import { Fa500Px, FaBox, FaBoxes } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Header from "./Header";
import ProductsService from "../services/ProductsService";

// const productsMock = [
//   {
//     id: 1,
//     image: "https://www.bazzarbog.com/34874-large_default/figuras-religiosas-en-yeso-pintadas-a-mano-25-cm-alto.jpg",
//     material: "Yeso",
//     size: "80 x 70 cm",
//     finish: "Acrilica",
//     price: 100,
//   },
//   {
//     id: 2,
//     image: "https://www.bazzarbog.com/34874-large_default/figuras-religiosas-en-yeso-pintadas-a-mano-25-cm-alto.jpg",
//     material: "Cemento",
//     size: "100 x 50 cm",
//     finish: "Acrilica",
//     price: 200,
//   },
// ];

const ProductCard = ({ product, onEdit, onDelete }) => (
  <div className="flex flex-col items-center bg-white rounded-3xl p-6 shadow-lg min-w-72 sm:min-w-60">
    {/* Imagen del producto */}
    <div className="flex justify-center  w-full rounded-lg border  ">
      <img
        src={product?.image?.url}
        alt="Campana"
        className="w-auto h-40 object-contain "
      />
    </div>

    {/* Información del producto */}
    <div className="space-y-2 text-gray-700">
      <p className="text-lg font-bold flex items-center gap-2">
        <LucidePenTool className="text-amber-500" />
        Material: <span className="font-normal">{product?.material}</span>
      </p>
      <p className="text-lg font-bold flex items-center gap-2">
        <Ruler className="text-amber-500" />
        Tamaño: <span className="font-normal">{product?.tamanio}</span>
      </p>
      {product?.seccion === "imagenes" && <p className="text-lg font-bold flex items-center gap-2">
        <Paintbrush className="text-amber-500" />
        Acabado: <span className="font-normal">{product?.acabado}</span>
      </p>}
      {product?.seccion === "orfebreria" && <p className="text-lg font-bold flex items-center gap-2">
        <Scale className="text-amber-500" />
        Kilataje: <span className="font-normal">{product?.kilataje}</span>
      </p>}

      <p className="text-lg font-bold flex items-center gap-2">
        <DollarSign className="text-amber-500" />
        Precio: <span className="font-normal">${product?.precio}</span>
      </p>
    </div>

    {/* Botón de acción */}
    <div className="mt-4 flex justify-end">
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
        onClick={() => onDelete(product?.id)}
      >
        <Trash />
        <span>Eliminar</span>
      </button>
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

const AddProductModal = ({ isOpen, onClose, onSave, isChange }) => {
  const [formData, setFormData] = useState({
    material: "",
    seccion: "imagenes",
    tamanio: "",
    kilataje: "",
    acabado: "",
    precio: "",
    stock: 0
  });

  const productService = new ProductsService()

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    if (!formData.material || !formData.tamanio || !formData.stock || !formData.precio) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const newProduct = await productService.AddProduct(formData, image)
    isChange(true)
    onClose(false);
  };



  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file)
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  if (!isOpen) return null;
  return (
    <div
      className={`${isOpen ? "block" : "hidden"} fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300`}
    >
      <div className="bg-white rounded-lg w-[90%] md:w-[50%] p-6 relative shadow-xl transform transition-all duration-500 scale-95">
        {/* Botón para cerrar */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={() => onClose(false)}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Título */}
        <h2 className="text-2xl font-bold text-center mb-6">Agregar Nuevo Producto</h2>

        {/* Formulario */}
        <form>
          {/* Imagen y Vista Previa */}
          <div className="mb-4">
            <label className="block text-base font-bold mb-2">Imagen</label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="w-full border border-base rounded py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {imagePreview && (
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500 mb-2">Vista Previa:</p>
                <img
                  src={imagePreview}
                  alt="Vista previa"
                  className="h-32 w-32 mx-auto object-contain border border-gray-300 rounded"
                />
              </div>
            )}
          </div>

          {/* Otros Campos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="col-span-1">
              <label className="block text-base font-bold mb-2">Sección</label>
              <select
                name="seccion"
                className="w-full border border-base rounded py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              >
                <option value="imagenes">Imágenes</option>
                <option value="orfebreria">Orfebrería</option>
              </select>
            </div>
            {[
              { label: "Material", name: "material", type: "text" },
              { label: "Tamaño", name: "tamanio", type: "text" },
              { label: "Stock", name: "stock", type: "text" },
              { label: "Precio", name: "precio", type: "number" },
            ].map((field) => (
              <div key={field.name} className="col-span-1">
                <label className="block text-base font-bold mb-2">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field.name]: e.target.value })
                  }
                  className="w-full border border-base rounded py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
            {
              formData.seccion === "imagenes" ? <div className="col-span-1">
                <label className="block text-base font-bold mb-2">Acabado</label>
                <input
                  type="text"
                  name="acabado"
                  value={formData.acabado}
                  onChange={handleChange}
                  className="w-full border border-base rounded py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div> :
                <div className="col-span-1">
                  <label className="block text-base font-bold mb-2">Kilataje</label>
                  <input
                    type="text"
                    name="kilataje"
                    value={formData.kilataje}
                    onChange={handleChange}
                    className="w-full border border-base rounded py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
            }
          </div>
        </form>

        {/* Botones */}
        <div className="text-center mt-6">
          <button
            className="px-6 py-2 mr-4 rounded-full text-white bg-gray-500 hover:bg-gray-600 transition"
            onClick={() => onClose(false)}
          >
            Cancelar
          </button>
          <button
            className="px-6 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition"
            onClick={handleSave}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

const Productos = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Estado para la barra de búsqueda
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isChangeProducts, setIsChangeProducts] = useState(false);
  const [selectSection, setSelectSection] = useState("imagenes")
  const productService = new ProductsService()
  useEffect(() => {
    async function getProducts() {
      const products = await productService.getProducts();
      setProducts(products)
    }
    getProducts()
    setIsChangeProducts(false)
  }, [isChangeProducts])

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const handleDelete = async (id) => {
    await productService.DeleteProduct(id)
    setIsChangeProducts(true)
  };

  const handleSaveEdit = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === updatedProduct.id ? updatedProduct : p
      )
    );
    setIsEditModalOpen(false);
  };
  // Filtrar productos según la seccion
  const sectionProducts = products?.filter((product) =>
    product?.seccion?.toLowerCase().includes(selectSection)
  );

  // Filtrar productos según la barra de búsqueda
  const filteredProducts = products?.filter((product) =>
    product?.material?.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className="flex flex-col items-center bg-amber-100 min-h-screen w-full overflow-x-hidden">
      {/* Menú Superior */}
      <Header />
      <h1 className="text-3xl py-3 font-bold flex font-letras items-center gap-5">  <FaBox size={50} /> Adminstracion de Productos</h1>

      <section className="py-4 px-10  w-full mb-4 flex justify-between space-x-6 ">
        <nav className="flex justify-center gap-4">
          {["imagenes", "orfebreria"].map((section) => (
            <button
              key={section}
              className={`${selectSection === section ? "bg-base text-white" : "bg-white text-letras"
                } px-6 py-2 text-sm font-medium rounded-full transition border border-base hover:shadow hover:bg-base hover:text-white`}
              onClick={() => setSelectSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
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
        {sectionProducts?.map((product) => (
          <ProductCard key={product.id} product={product} onEdit={handleEdit} onDelete={handleDelete} />
        ))}
      </div>

      {/* Modales */}
      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleAddProduct}
        isChange={setIsChangeProducts}
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

export default Productos;
