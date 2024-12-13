import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import VentasService from "../services/ventasService";
import {
  BoxIcon,
  HomeIcon,
  Image,
  MailIcon,
  PhoneIcon,
  TagIcon,
  UserIcon,
} from "lucide-react";
import Header from "./Header";

const OrderDetails = () => {

    const navigate = useNavigate()

  const { orderId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const ventasS = new VentasService();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await ventasS.getVentasById(orderId);
        setData(result);
        console.log(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [orderId]);

  if (loading) {
    return <p className="text-center text-gray-500">Cargando datos...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  if (!data) {
    return <p className="text-center text-gray-500">No se encontraron datos.</p>;
  }
  // Función para redirigir a la lista de pedidos
  const goToOrdersList = () => {
    navigate("/ventas") // Asegúrate de que la ruta de tus pedidos sea "/orders"
  };

  return (
    <div className=" bg-amber-100 min-h-screen w-full overflow-x-hidden">
    {/* Menú Superior */}

    
      {/* Titulo principal */}
      <div className="p-6 md:p-10 space-y-8 text-gray-800">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-amber-700">Detalles del Pedido</h2>
        <p className="text-gray-700">
          <span className="font-medium">Orden ID:</span> {data.orderId}
        </p>
      </div>

      {/* Estado del Pedido */}
      <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex items-center justify-between">
        <h3 className="text-xl font-semibold flex items-center text-amber-700">
          <TagIcon className="h-6 w-6 text-amber-600 mr-2" />
          Estado del Pedido
        </h3>
        <p
          className={`mt-2 px-4 py-2 rounded-full text-sm font-medium inline-block ${
            data.status === "NUEVO"
              ? "bg-amber-100 text-amber-700"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {data.status}
        </p>
      </div>
<div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2">
    {/* Información del Cliente */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 col-span-2 md:col-span-1">
        <h3 className="text-xl font-semibold flex items-center text-amber-700">
          <UserIcon className="h-6 w-6 text-amber-600 mr-2" />
          Información del Cliente
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <p>
            <span className="font-medium">Nombre:</span> {data.customer?.name}
          </p>
          <p>
            <MailIcon className="h-5 w-5 text-gray-500 inline mr-2" />
            <span className="font-medium">Correo:</span> {data.customer?.email}
          </p>
          <p>
            <PhoneIcon className="h-5 w-5 text-gray-500 inline mr-2" />
            <span className="font-medium">Teléfono:</span> {data.customer?.phone}
          </p>
          <p>
            <HomeIcon className="h-5 w-5 text-gray-500 inline mr-2" />
            <span className="font-medium">Dirección:</span>{" "}
            {data.customer?.mailingAddress}
          </p>
        </div>
      </div>

      {/* Detalles del Producto */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-xl font-semibold flex items-center text-amber-700">
          <BoxIcon className="h-6 w-6 text-amber-600 mr-2" />
          Detalles del Producto
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <p>
            <span className="font-medium">Material:</span> {data.alloy.type}
          </p>
          <p>
            <span className="font-medium">Precio por KG:</span> $
            {data.alloy.pricePerKg}
          </p>
        </div>
      </div>

      {/* Detalles de Dimensiones */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-xl font-semibold text-amber-700">Dimensiones del Producto</h3>
        <ul className="list-disc list-inside text-gray-700 mt-4">
          <li>Diámetro: {data.weightSize?.diameter} cm</li>
          <li>Altura: {data.weightSize?.height} cm</li>
          <li>Peso: {data.weightSize?.weight} kg</li>
        </ul>
      </div>
</div>
      

      {/* Información del Acabado y Descripción con Imágenes */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-xl font-semibold flex items-center text-amber-700">
          <Image className="h-6 w-6 text-amber-600 mr-2" />
          Información del Acabado
        </h3>
        <div className="mt-4">
          <p className="font-medium">Acabado:</p>
          <p>{data.finish?.finish}</p>
          <p className="mt-2 text-gray-600">{data.finish?.description}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
            {data.finish?.images?.map((img, index) => (
              <img
                key={index}
                src={img.url}
                alt={`Imagen ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg border border-gray-300"
              />
            ))}
          </div>
        </div>
      </div>

      

      {/* Nota Personalizada */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-xl font-semibold text-amber-700">Nota Personalizada</h3>
        <p className="italic text-gray-600 mt-2">{data.customNote}</p>
      </div>

      {/* Total y Fecha */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center">
          <p className="text-lg font-semibold text-amber-700">
            Total:{" "}
            <span className="text-amber-900">
              ${data.totalPrice.toLocaleString()}
            </span>
          </p>
          <p className="text-sm text-gray-600">
            Fecha: {new Date(data.orderDate).toLocaleDateString()}
          </p>
        </div>
        {/* Botón para ir a la lista de pedidos */}
      
      </div><div className="flex justify-center mt-6">
        <button
          onClick={goToOrdersList} // Redirige al hacer clic
          className="px-6 py-3 bg-amber-600 text-white rounded-full shadow-lg hover:bg-amber-700 transition duration-200 ease-in-out"
        >
          Ver Lista de Pedidos
        </button>
      </div>
      </div>
    </div>
  );
};

export default OrderDetails;
