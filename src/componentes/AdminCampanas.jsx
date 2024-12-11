import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { Plus, X } from "lucide-react";
import CampanaService from "../services/CampanasService";

const CampanasAdmin = () => {
    const [aleaciones, setAleaciones] = useState([]);
    const [acabados, setAcabados] = useState([]);
    const [pesos, setPesos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [isChangeAlloys, setIsChangeAlloys] = useState(false);

const bellService = new CampanaService()
    useEffect(()=>{
        async function getAlloys (){
            const alloys = await bellService.getAleaciones()
            setAleaciones(alloys)
        }
        getAlloys()
        setIsChangeAlloys(false)
    },[isChangeAlloys])



    // States for inputs
    const [aleacion, setAleacion] = useState({type:"",pricePerKg:""});
    const [acabado, setAcabado] = useState({ nombre: "", descripcion: "", imagenes: [] });
    const [peso, setPeso] = useState({ diametro: "", altura: "", peso: "" });

   

    const onDelete = async(id) => {
        await bellService.DeleteAleacion(id)
        const alloys = await bellService.getAleaciones()
        setAleaciones(alloys)
    };

    const onEdit = (alloy) => {
       setIsModalEditOpen(true)
        setAleacion(alloy)
    };

    const handleAddAcabado = () => {
        setAcabados([...acabados, acabado]);
        setAcabado({ nombre: "", descripcion: "", imagenes: [] });
    };

    const handleAddPeso = () => {
        setPesos([...pesos, peso]);
        setPeso({ diametro: "", altura: "", peso: "" });
    };

    return (
        <div className=" bg-gray-100 min-h-screen">
            <Header />
            <h1 className="text-2xl font-bold mb-4">Administrar Campanas</h1>
            <div className="w-full  flex gap-3 px-10">
                <div className="bg-gray-300 w-1/5 rounded">
                    <nav className='flex justify-center flex-col gap-2 p-4'>
                        <button
                            className="px-6 py-2 text-sm font-medium rounded-full transition border border-base hover:shadow bg-base text-white"
                            onClick={() => console.log("Botón clicado")}>
                            Campanas
                        </button>


                        <button
                            className="px-6 py-2 text-sm font-medium rounded-full transition bg-white text-base border border-base hover:shadow hover:bg-base hover:text-white"
                            onClick={() => console.log("Botón clicado")}>
                            Imagenes
                        </button>
                        <button
                            className="px-6 py-2 text-sm font-medium rounded-full transition bg-white text-base border border-base hover:shadow hover:bg-base hover:text-white"
                            onClick={() => console.log("Botón clicado")}>
                            Orfebreria
                        </button>
                    </nav>

                </div>
                <div className="bg-gray-300 rounded w-full">
                    {/* Aleaciones */}
                    <div className="mb-8">
                        <div className="flex justify-between items-center py-2 px-10  border-b-2 border-base">
                            <h2 className="text-2xl font-bold mb-2 ">Aleaciones</h2>
                            <button
                                className='bg-base flex rounded-full text-white text-center absolute right-20'
                                onClick={() => setIsModalOpen(true)}
                            >
                                <p className='pl-3 pt-[6px]'>Nuevo Elemento</p>
                                <p className='bg-letras ml-2 w-10 h-10 rounded-full text-2xl flex items-center justify-center'>
                                    <Plus className='w-6 h-6' />
                                </p>
                            </button>

                        </div>
                        <div className="grid grid-cols-3 gap-3 px-10 py-5">
                            {aleaciones?.map(aleacion =>
                                <div key={aleacion?.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
                                <h3 className="text-lg font-semibold mb-2">{aleacion?.type}</h3>
                                <p className="text-gray-600 mb-4">Precio por kg: ${aleacion?.pricePerKg}</p>
                                <div className="flex justify-between">
                                  <button
                                    onClick={() => onEdit(aleacion)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                  >
                                    Editar
                                  </button>
                                  <button
                                    onClick={() => onDelete(aleacion?.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                  >
                                    Eliminar
                                  </button>
                                </div>
                              </div>)}

                        </div>
                    </div>
                </div>
                <ModalAlloys isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} SetIsChangeAlloys={setIsChangeAlloys} />
                <ModalEditAlloys isModalOpen={isModalEditOpen} setIsModalOpen={setIsModalEditOpen} SetIsChangeAlloys={setIsChangeAlloys} dataAlloy={aleacion} />
            </div>

        </div>
    );
};

export default CampanasAdmin;

const ModalAlloys = ({ setIsModalOpen, isModalOpen, SetIsChangeAlloys}) => {
    const bellService = new CampanaService()
    const [alloy, setAlloy]= useState({
        type:"",
        pricePerKg:0
    })

    const handleChange=(e)=>{
        setAlloy({...alloy,[e.target.name]:e.target.value})
    }

   const handleAddAlloy=async(e)=>{
    e.preventDefault()
        await bellService.AddAleacion(alloy)
        setAlloy({
            type:"",
            pricePerKg:0
        })
        SetIsChangeAlloys(true)
        setIsModalOpen(false)
        
   }


    return (

        <div className={`fixed ${isModalOpen ? "block" : "hidden"} inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center`}>
            <div className="bg-white rounded-lg w-[600px] p-6 relative">
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                    onClick={() => setIsModalOpen(false)}
                >
                    <X className="w-6 h-6" />
                </button>
                <h2 className="text-2xl font-bold mb-4 text-center">Agregar Nuevo Elemento</h2>
                <div className="mb-4">
                    <label className="text-letras font-medium mb-4" htmlFor="">Aleación</label>
                    <input type="text"
                    name="type"
                    value={alloy.type}
                    onChange={handleChange}
                     className="w-full px-4 py-2 border border-base rounded-full" />
                </div>
                <div className="mb-4">
                    <label className="text-letras font-medium mb-4" htmlFor="">Precio por KG</label>
                    <input type="number"
                        name="pricePerKg"
                        value={alloy.pricePerKg}
                        onChange={handleChange}
                     className="w-full px-4 py-2 border border-base rounded-full" />
                </div>

                <div className="text-center">
                    <button
                        className={`px-6 py-2 rounded-full text-white bg-gray-400 `}
                        onClick={handleAddAlloy}
                    >
                        Guardar
                    </button>
                </div>
            </div>
        </div>

    )
}

const ModalEditAlloys = ({ setIsModalOpen, isModalOpen, SetIsChangeAlloys, dataAlloy}) => {
    const bellService = new CampanaService()
    const [alloy, setAlloy]= useState({type: dataAlloy?.type ||"", pricePerKg:dataAlloy?.pricePerKg || ""})

    const handleChange=(e)=>{
        setAlloy({...alloy,[e.target.name]:e.target.value})
    }

   const handleAddAlloy=async(e)=>{
    e.preventDefault()
        await bellService.AddAleacion(alloy)
        setAlloy({
            type:"",
            pricePerKg:0
        })
        SetIsChangeAlloys(true)
        setIsModalOpen(false)
        
   }


    return (

        <div className={`fixed ${isModalOpen ? "block" : "hidden"} inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center`}>
            <div className="bg-white rounded-lg w-[600px] p-6 relative">
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                    onClick={() => setIsModalOpen(false)}
                >
                    <X className="w-6 h-6" />
                </button>
                <h2 className="text-2xl font-bold mb-4 text-center">Editar Aleación</h2>
                <div className="mb-4">
                    <label className="text-letras font-medium mb-4" htmlFor="">Aleación</label>
                    <input type="text"
                    name="type"
                    value={alloy?.type}
                    onChange={handleChange}
                     className="w-full px-4 py-2 border border-base rounded-full" />
                </div>
                <div className="mb-4">
                    <label className="text-letras font-medium mb-4" htmlFor="">Precio por KG</label>
                    <input type="number"
                        name="pricePerKg"
                        value={alloy?.pricePerKg}
                        onChange={handleChange}
                     className="w-full px-4 py-2 border border-base rounded-full" />
                </div>

                <div className="text-center">
                    <button
                        className={`px-6 py-2 rounded-full text-white bg-gray-400 `}
                        onClick={handleAddAlloy}
                    >
                        Guardar
                    </button>
                </div>
            </div>
        </div>

    )
}