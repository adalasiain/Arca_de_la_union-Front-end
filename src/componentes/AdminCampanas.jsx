import { Bell, Plus, X } from "lucide-react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { FaBell, FaDollarSign, FaEdit, FaFileImage, FaPlus, FaPoundSign, FaTrash } from "react-icons/fa";
import { useState } from "react";

function AdminCampanas() {
    const [alloys, setAlloys] = useState([
        {
            id: 1,
            type: "Bronce",
            pricePerKg: 200
        },
        {
            id: 2,
            type: "Bronce",
            pricePerKg: 200
        },
        {
            id: 3,
            type: "Bronce",
            pricePerKg: 200
        },

    ]

    )
    const [finishes, setFinishes] = useState([
        {
            id: 1,
            finish: "Acabado Barroco",
            description: "Acabado con estilo barroco",
            images: [
                {
                    url: "",
                    alt: "Acabado barroco 1"
                },
                {
                    url: "",
                    alt: "Acabado barroco 2"
                }
            ]
        },
        {
            id: 2,
            finish: "Acabado Barroco",
            description: "Acabado con estilo barroco",
            images: [
                {
                    url: "",
                    alt: "Acabado barroco 1"
                },
                {
                    url: "",
                    alt: "Acabado barroco 2"
                }
            ]
        }

    ]

    )
    const [selectedSection, setSelectedSection] = useState("aleaciones")
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleAddAlloy = (newAlloy) => {
        setAlloys([...alloys, newAlloy])
    }
    const handleAddFinish = (newfinish) => {
        setFinishes([...finishes, newfinish])
    }
    const handleTrash = (id) => {
        setAlloys(alloys.filter(alloy => alloy.id !== id))
    }


    return (<div className="flex flex-col items-center bg-gray-50 min-h-screen">
        {/* Menú Superior */}
        <Header />
        <h1 className="text-3xl py-3 font-bold flex font-letras items-center gap-5">  <Bell size={50} /> Adminstracion de Campanas</h1>

        <main className="w-full h-full px-10 flex flex-col md:flex-row gap-2">
            <div className="bg-gray-300 md:w-1/5 w-full h-full rounded shadow border">
                <nav className='flex md:flex-col flex-row justify-center w-full  rounded gap-4 p-3'>
                    <button
                        className={`px-6 py-2 text-sm font-medium rounded-full transition border ${selectedSection === "aleaciones" && "bg-base text-white"} border-base text-base hover:shadow `}
                        onClick={() => setSelectedSection("aleaciones")}>
                        Aleaciones
                    </button>
                    <button
                        className={`px-6 py-2 text-sm font-medium rounded-full transition border ${selectedSection === "acabados" && "bg-base text-white"} text-base border-base hover:shadow `}
                        onClick={() => setSelectedSection("acabados")}>
                        Acabados
                    </button>
                    <button
                        className={`px-6 py-2 text-sm font-medium rounded-full transition border ${selectedSection === "pesos" && "bg-base text-white"} border-base text-base hover:shadow `}
                        onClick={() => setSelectedSection("pesos")}>
                        Pesos
                    </button>
                </nav>

            </div>
            {
                selectedSection === "aleaciones" && <div className="bg-gray-300 w-full h-[80] rounded shadow px-5 py-3">
                    <div className="flex px-5 py-2 border-b-2 border-base justify-between items-center">
                        <h1 className="text-4xl font-medium">
                            Aleaciones
                        </h1>
                        <button
                            className='bg-base border flex rounded-full text-white text-center '
                            onClick={() => setIsModalOpen(true)}
                        >
                            <p className='pl-3 pt-[6px]'>Nueva Aleación</p>
                            <p className='bg-letras ml-2 w-10 h-10 rounded-full text-2xl flex items-center justify-center'>
                                <Plus className='w-6 h-6' />
                            </p>
                        </button>
                    </div>
                    <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-2 p-5">
                        {alloys?.map((aleacion) =>
                            <div key={aleacion.id} className="bg-white rounded-xl shadow-md shadow-amber-200  p-4">
                                <h2 className="text-2xl  font-bold md-2">{aleacion.type}</h2>
                                <p className="text-lg font-bold mb-2 text-gray-600 flex items-center">
                                    <FaDollarSign className="mr-2 text-amber-500" />
                                    {aleacion.pricePerKg} kg
                                </p>
                                <hr className="border-base" />
                                <aside className="flex gap-2 justify-end mt-3">
                                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded flex items-center">
                                        <FaEdit />
                                        <span>Editar</span>
                                    </button >
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center"
                                        onClick={() => handleTrash(aleacion.id)}
                                    >
                                        <FaTrash />
                                        Eliminar
                                    </button>
                                </aside>

                            </div>
                        )}
                    </div>


                </div>
            }
            {
                selectedSection === "acabados" && <div className="bg-gray-300 w-full h-[80] rounded shadow px-5 py-3">
                    <div className="flex px-5 py-2 border-b-2 border-base justify-between items-center">
                        <h1 className="text-4xl font-medium">
                            Acabados
                        </h1>
                        <button
                            className='bg-base border flex rounded-full text-white text-center '
                            onClick={() => setIsModalOpen(true)}
                        >
                            <p className='pl-3 pt-[6px]'>Nuevo Acabado</p>
                            <p className='bg-letras ml-2 w-10 h-10 rounded-full text-2xl flex items-center justify-center'>
                                <Plus className='w-6 h-6' />
                            </p>
                        </button>
                    </div>
                    <div className="grid  sm:grid-cols-2  gap-2 p-5">
                        {finishes?.map((acabado) =>
                            <div key={acabado.id} className="bg-white rounded-xl shadow-lg shadow-amber-200  p-4">
                                <h2 className="text-2xl  font-bold mb-2">{acabado.finish}</h2>
                                <p className="text-gray-600 mb-4">
                                    {acabado.description}
                                </p>
                                <div className="flex flex-wrap justify-center  gap-3 mb-4">
                                    {
                                        acabado?.images?.map((imagen) => <div className="w-1/2 md:w-1/3  p-2 border border-base text-center flex justify-center">
                                            <p>
                                                {JSON.stringify(imagen)}
                                            </p>
                                         <img src={imagen} alt={imagen.alt} className="w-full  border"/> 
                                            
                                        </div>)
                                    }
                                </div>
                                <hr className="border-base" />
                                <aside className="flex gap-2 justify-end mt-3">
                                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded flex items-center">
                                        <FaEdit />
                                        <span>Editar</span>
                                    </button >
                                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center">
                                        <FaPlus />
                                        <span>Agregar imagen</span>
                                    </button >
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center"
                                        onClick={() => handleTrash(acabado.id)}
                                    >
                                        <FaTrash />
                                        Eliminar
                                    </button>
                                </aside>

                            </div>
                        )}
                    </div>


                </div>
            }
            {
                selectedSection === "pesos" && <div className="bg-gray-300 w-full h-[80] rounded shadow px-5 py-3">
                    <div className="flex px-5 py-2 border-b-2 border-base justify-between items-center">
                        <h1 className="text-4xl font-medium">
                            Tamaños y Peso
                        </h1>
                        <button
                            className='bg-base border flex rounded-full text-white text-center '
                            onClick={() => setIsModalOpen(true)}
                        >
                            <p className='pl-3 pt-[6px]'>Nuevo Peso</p>
                            <p className='bg-letras ml-2 w-10 h-10 rounded-full text-2xl flex items-center justify-center'>
                                <Plus className='w-6 h-6' />
                            </p>
                        </button>
                    </div>
                    <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-2 p-5">
                        {alloys?.map((aleacion) =>
                            <div key={aleacion.id} className="bg-white rounded-xl shadow-md shadow-amber-200  p-4">
                                <h2 className="text-2xl  font-bold md-2">{aleacion.type}</h2>
                                <p className="text-lg font-bold mb-2 text-gray-600 flex items-center">
                                    <FaDollarSign className="mr-2 text-amber-500" />
                                    {aleacion.pricePerKg} kg
                                </p>
                                <hr className="border-base" />
                                <aside className="flex gap-2 justify-end mt-3">
                                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded flex items-center">
                                        <FaEdit />
                                        <span>Editar</span>
                                    </button >
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center"
                                        onClick={() => handleTrash(aleacion.id)}
                                    >
                                        <FaTrash />
                                        Eliminar
                                    </button>
                                </aside>

                            </div>
                        )}
                    </div>


                </div>
            }



        </main>
        {
            selectedSection === "aleaciones" && <ModalAlloy isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} handleAddAlloy={handleAddAlloy} />
        }
        {
            selectedSection === "acabados" && <ModalFinish isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} handleAddFinish={handleAddFinish} />
        }



    </div>


    )
}

export default AdminCampanas;


function ModalAlloy({ isModalOpen, setIsModalOpen, handleAddAlloy }) {
    const elementTypes = [
        { name: 'Material', placeholderText: 'Ingresa el material' },
        { name: 'Acabado', placeholderText: 'Describe el acabado' },
        { name: 'Peso', placeholderText: 'Ingresa el peso' }
    ];
    const [selectedType, setSelectedType] = useState(null);
    const [newAlloy, setNewAlloy] = useState({
        id: crypto.randomUUID(),
        type: "",
        pricePerKg: 0
    })
    const handleChange = (e) => {
        setNewAlloy({ ...newAlloy, [e.target.name]: e.target.value })
    }
    const AddAlloy = () => {
        handleAddAlloy(newAlloy)
        setIsModalOpen(false)
        setNewAlloy({
            type: "",
            pricePerKg: 0
        })
    }


    return (

        <div className={`${isModalOpen ? "block" : "hidden"} fixed inset-0 top-0 left-0 w-full h-full bg-black bg-opacity-75  flex items-center justify-center`}>
            <div className="bg-white rounded-lg md:w-[40%] p-6 relative">
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                    onClick={() => setIsModalOpen(false)}
                >
                    <X className="w-6 h-6" />
                </button>
                <h2 className="text-2xl font-bold mb-4 text-center">Agregar nueva aleación</h2>
                <form action="">
                    <div className="mb-4">
                        <label className="block text-base  font-bold mb-2" htmlFor="">Nombre de la aleacion</label>
                        <input className="shadow appearance-none border border-base rounded w-full py-2 px-3 text-gray-700 font-medium leading-tight focus:outline-none focus:shadow-outline" type="text" name="type" value={newAlloy.type} onChange={handleChange} id="" />

                    </div>
                    <div className="mb-4">
                        <label className="block text-base  font-bold mb-2" htmlFor="">Precio por KG</label>
                        <input className="shadow appearance-none border border-base rounded w-full py-2 px-3 text-gray-700 font-medium leading-tight focus:outline-none focus:shadow-outline" type="number" name="pricePerKg" value={newAlloy.pricePerKg} onChange={handleChange} id="" />

                    </div>
                </form>

                <div className="text-center">
                    <button
                        className={`px-6 py-2 rounded-full text-white  bg-gray-500 
                            `}
                        onClick={AddAlloy}
                    >
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    )
}

const ModalFinish= ({ isModalOpen, setIsModalOpen, handleAddFinish  }) => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagenes, setImagenes] = useState([]);
    const [imagen, setImagen] = useState(null);
  
    const handleAgregarImagen = (e) => {
        e.preventDefault()
      if (imagen) {
        setImagenes([...imagenes, {url: imagen,alt:"alt 1"}]);
        setImagen(null);
      }
    };
  
    const handleEliminarImagen = (index) => {
      setImagenes(imagenes.filter((img, i) => i !== index));
    };
  
    const handleAgregarAcabado = (e) => {
        e.preventDefault()
      const nuevoAcabado = {
        id: crypto.randomUUID(),
       finish: nombre,
       description: descripcion,
        images: imagenes
      };
      handleAddFinish(nuevoAcabado);
      setIsModalOpen(false)
    };
  
    return (
        <div className={`${isModalOpen ? "block" : "hidden"} fixed inset-0 top-0 left-0 w-full h-full bg-black bg-opacity-75  flex items-center justify-center`}>
        <div className="bg-white rounded-lg shadow-lg p-4 w-1/2">
          <h2 className="text-2xl font-bold mb-4">Agregar nuevo acabado</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                Nombre del acabado
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nombre" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">
                Descripción del acabado
              </label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagenes">
                Imágenes del acabado
              </label>
              <div className="flex flex-wrap justify-center">
                {imagenes.map((img, index) => (
                  <div key={index} className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
                    <img src={img} alt={`Imagen ${index + 1}`} />
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleEliminarImagen(index)}>
                      <FaTrash /> Eliminar
                    </button>
                  </div>
                ))}
                {imagen && (
                  <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
                    <img src={imagen} alt="Imagen" />
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => setImagen(null)}>
                      <FaTrash /> Eliminar
                    </button>
                  </div>
                )}
              </div>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="imagen" type="file" onChange={(e) => setImagen(URL.createObjectURL(e.target.files[0]))} />
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleAgregarImagen}>
                <FaPlus /> Agregar imagen
              </button>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAgregarAcabado}>
              Agregar acabado
            </button>
          </form>
        </div>
      </div>
    );
  };