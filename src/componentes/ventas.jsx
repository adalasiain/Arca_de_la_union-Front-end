
import React, { useEffect, useState } from 'react';
import { EllipsisVertical, Home } from 'lucide-react';
import { FaBoxes } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { Plus, ChevronRight } from 'lucide-react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from './Header';
import VentasService from '../services/ventasService';

const Ventas = () => {
  const [activeTab, setActiveTab] = useState("En Proceso");
  const [modalNuevoTrabajo, setModalNuevoTrabajo] = useState(false);
  const [trabajosEnProceso, setTrabajosEnProceso] = useState([]);
  const [trabajosTerminados, setTrabajosTerminados] = useState([]);
  const [trabajoSeleccionado, setTrabajoSeleccionado] = useState(null);
  const [ventas, setVentas] = useState(null);
  const [IsChangeventas, setIsChangeVentas] = useState(false);

  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const toggleMenu = (orderId) => {
    setSelectedOrderId(selectedOrderId === orderId ? null : orderId);
  };

  const [nuevoTrabajo, setNuevoTrabajo] = useState({
    fecha: '',
    cliente: '',
    lugar: '',
    organizacion: '',
    descripcion: '',
    costoFinal: ''
  });

  const ventasS = new VentasService()
  useEffect(() => {
    async function getVentas() {
      const data = await ventasS.getVentas()
      setVentas(data)
    }
    getVentas()
    setIsChangeVentas(false)
  }, [IsChangeventas])


  const handleFinalize=async(orderId)=>{
    const data = await ventasS.FinalizeOrder(orderId)
    setIsChangeVentas(true)
  }

  //  Filtrar productos según la seccion
  const statusOrders = ventas?.filter((venta) =>
   venta?.status?.includes(activeTab ==="En Proceso" ?"NUEVO":"FINALIZADO")
  );


  // Función para añadir un nuevo trabajo
  const handleNuevoTrabajo = () => {
    const trabajoNuevo = { ...nuevoTrabajo };
    setTrabajosEnProceso([...trabajosEnProceso, trabajoNuevo]);
    setModalNuevoTrabajo(false);
    setNuevoTrabajo({
      fecha: '',
      cliente: '',
      lugar: '',
      organizacion: '',
      descripcion: '',
      costoFinal: ''
    });
  };

  // Mover trabajo a terminados
  const terminarTrabajo = (trabajo) => {
    setTrabajosTerminados([...trabajosTerminados, { ...trabajo, costoFinal: '' }]);
    setTrabajosEnProceso(trabajosEnProceso.filter(t => t !== trabajo));
  };

  // Ocultar detalles de un trabajo
  const toggleDetallesTrabajo = (trabajo) => {
    setTrabajoSeleccionado(trabajo === trabajoSeleccionado ? null : trabajo);
  };

  return (
    <div>
      {/* Navbar */}
      <Header />

      {/* Filtro */}
      <section className="py-3 mt-4 mb-4 flex justify-center space-x-6">
        {["En Proceso", "Finalizadas"].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 text-sm font-medium rounded-full transition ${activeTab === tab
              ? "bg-base text-white shadow-md"
              : "bg-white text-base border border-base hover:shadow"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
       
      </section>

      {/* Lista de Trabajos */}
      <div className="p-3 rounded-xl mx-10 mt-5 bg-div  justify-center">
        <table className="table-auto w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">Cliente</th>
              <th className="px-4 py-2 border">Aleacion</th>
              <th className="px-4 py-2 border">Acabado</th>
              <th className="px-4 py-2 border">Peso y tamaño</th>
              <th className="px-4 py-2 border">total</th>
              <th className="px-4 py-2 border"></th>
            </tr>
          </thead>
          <tbody>
            {statusOrders?.map((order, index) => (
              <tr
                key={order.orderId}
                className={`border ${!order.customer || !order.alloy || !order.finish || !order.weightSize
                  ? "bg-red-100"
                  : "bg-white"
                  }`}
              >

                <td className="px-4 py-3 border">
                  {order.customer ? order?.customer?.name : "N/A"}
                </td>
                <td className="px-4 py-2 border">{order?.alloy?.type || "N/A"}</td>
                <td className="px-4 py-2 border">{order?.finish?.finish || "N/A"}</td>
                <td className="px-4 py-2 border">{order?.weightSize?.weight || "N/A"}</td>
                <td className="px-4 py-2 border">{order?.totalPrice || "N/A"}</td>
                <td className="px-4 py-2 w-10">
                {activeTab ==="En Proceso" ?<OrderActions
                    order={order}
                    isOpen={selectedOrderId === order.orderId}
                    onToggle={() => toggleMenu(order.orderId)}
                    onFinalize={handleFinalize}
                  />: <button className="text-center px-6 py-2 bg-amber-600 text-white rounded-full shadow-lg hover:bg-amber-700 transition duration-200 ease-in-out">
                  <Link to={`/ventas/${order.orderId}`}>Detalles</Link>
                </button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ventas;

const OrderActions = ({order, isOpen, onToggle, onFinalize}) =>  {
  return (
      <div className="relative w-full ">
        {/* Botón con tres puntos */}
        <button
          onClick={onToggle}
          className=" p-2 text-center bg-amber-700 text-white rounded-full  shadow-lg hover:bg-amber-800 transition duration-200 ease-in-out"
        >
        <EllipsisVertical/>
        </button>

        {/* Menú de acciones */}
        {isOpen && (
          <div className="absolute w-auto  top-0 right-16 border shadow-md z-10 flex flex-col  gap-2 bg-white shadow-lg border p-4 rounded-md">
            <button className="text-center px-6 py-2 bg-amber-600 text-white rounded-full shadow-lg hover:bg-amber-700 transition duration-200 ease-in-out">
              <Link to={`/ventas/${order.orderId}`}>Detalles</Link>
            </button>
            <button className="text-center px-6 py-2 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition duration-200 ease-in-out"
            onClick={()=>onFinalize(order.orderId)}
            >
             Finalizar
            </button>
          </div>
        )}
      </div>
      );
};