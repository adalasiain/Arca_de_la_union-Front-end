import { Bell, Circle, DollarSign, Edit, Plus, Ruler, Trash2, Weight, X } from "lucide-react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { FaBell, FaDollarSign, FaEdit, FaFileImage, FaPlus, FaPoundSign, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import CampanaService from "../services/CampanasService";

function AdminCampanas() {
    const [aleaciones, setAleaciones] = useState([]);
    const [aleacion, setAleacion] = useState({});
    const [acabados, setAcabados] = useState([]);
    const [pesos, setPesos] = useState([]);
    const [peso, setPeso] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [isChangeAlloys, setIsChangeAlloys] = useState(false);
    const [isChangeSizes, setIsChangeSizes] = useState(false);
    const [isChangeFinishes, setIsChangeFinishes] = useState(false);

    const bellService = new CampanaService()
    useEffect(() => {
        async function getAlloys() {
            console.log("obteniendo aleaciones")
            const alloys = await bellService.getAleaciones()
            console.log(alloys)
            setAleaciones(alloys)
        }
        getAlloys()
        setIsChangeAlloys(false)
    }, [isChangeAlloys])

    useEffect(() => {
        async function getSizes() {
            console.log("obteniendo aleaciones")
            const sizes = await bellService.getPesos()
            console.log(sizes)
            setPesos(sizes)
        }
        getSizes()
        setIsChangeSizes(false)
    }, [isChangeSizes])


    useEffect(() => {
        async function getFinishes() {
            console.log("obteniendo acabados")
            const finishes = await bellService.getAcabados()
            console.log(finishes)
            setAcabados(finishes)
        }
        getFinishes()
        setIsChangeFinishes(false)
    }, [isChangeFinishes])


    const onDelete = async (id) => {
        await bellService.DeleteAleacion(id)
        const alloys = await bellService.getAleaciones()
        setAleaciones(alloys)
    };

    const onEdit = (alloy) => {
        setIsModalEditOpen(true)
        setAleacion(alloy)
        console.log(alloy)
    };

    const onDeleteSize = async (id) => {
        await bellService.DeletePeso(id)
        setIsChangeSizes(true)
    };

    const onEditSize = (peso) => {
        setIsModalEditOpen(true)
        setPeso(peso)
        console.log(peso)
    };



    const onDeleteFinish = async (id) => {
        await bellService.DeleteAcabado(id)
        setIsChangeFinishes(true)
    };


    const [selectedSection, setSelectedSection] = useState("aleaciones")

    const handleAddFinish = (newfinish) => {
        setFinishes([...finishes, newfinish])
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
                        {aleaciones?.map((aleacion) =>
                            <div className="bg-white rounded-xl shadow-lg shadow-amber-200 p-6 ">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">{aleacion.type}</h2>
                                <div className="flex items-center text-lg font-semibold text-gray-600 mb-4">
                                    <DollarSign className="text-amber-500 w-5 h-5 mr-2" />
                                    <span>{aleacion.pricePerKg} kg</span>
                                </div>
                                <hr className="border-gray-300 my-4" />
                                <aside className="flex gap-3 justify-end">
                                    <button
                                        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
                                        onClick={() => onEdit(aleacion)}
                                    >
                                        <Edit className="w-5 h-5" />
                                        <span>Editar</span>
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
                                        onClick={() => onDelete(aleacion?.id)}
                                    >
                                        <Trash2 className="w-5 h-5" />
                                        <span>Eliminar</span>
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
                        {acabados?.map((acabado) =>
                            <AcabadoCard acabado={acabado} onEdit={onEdit} handleTrash={onDeleteFinish} />
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
                        {pesos?.map((peso) =>
                            <div key={peso.id} className="bg-white rounded-xl shadow-lg shadow-amber-200 p-6 ">
                                <div className="flex items-center gap-3 mb-4">
                                    <Weight className="text-orange-500 w-6 h-6" />
                                    <h2 className="text-3xl font-bold text-gray-800">{peso.weight} KG</h2>
                                </div>
                                <div className="text-lg text-gray-700 space-y-2">
                                    <div className="flex items-center gap-3">
                                        <Ruler className="text-blue-500 w-5 h-5" />
                                        <span>Altura: {peso.height} cm</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Circle className="text-green-500 w-5 h-5" />
                                        <span>Diámetro: {peso.diameter} cm</span>
                                    </div>
                                </div>
                                <hr className="border-gray-300 my-4" />
                                <aside className="flex gap-3 justify-end flex-col md:flex-row">
                                    <button
                                        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
                                        onClick={() => onEditSize(peso)}
                                    >
                                        <Edit className="w-5 h-5" />
                                        <span>Editar</span>
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
                                        onClick={() => onDeleteSize(peso.id)}
                                    >
                                        <Trash2 className="w-5 h-5" />
                                        <span>Eliminar</span>
                                    </button>
                                </aside>
                            </div>
                        )}
                    </div>


                </div>
            }



        </main>
        {
            selectedSection === "aleaciones" && (<div><ModalAlloys isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} SetIsChangeAlloys={setIsChangeAlloys} /> <ModalEditAlloys isModalOpen={isModalEditOpen} setIsModalOpen={setIsModalEditOpen} SetIsChangeAlloys={setIsChangeAlloys} dataAlloy={aleacion} /></div>
            )
        }
        {
            selectedSection === "acabados" && <AddAcabadoModal isModalOpen={isModalOpen} onClose={setIsModalOpen} onAddAcabado={handleAddFinish} />
        }

        {
            selectedSection === "pesos" && <div> <ModalSizes isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} SetIsChangeSizes={setIsChangeSizes} />

                <ModalEditSizes isModalOpen={isModalEditOpen} setIsModalOpen={setIsModalEditOpen} SetIsChangeSizes={setIsChangeSizes} dataSize={peso} />

            </div>
        }



    </div>


    )
}

export default AdminCampanas;


const AcabadoCard = ({ acabado, onEdit, handleTrash }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === acabado.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? acabado.images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="bg-white rounded-xl shadow-lg shadow-amber-200 p-6">
            <h2 className="text-2xl font-bold mb-2">{acabado.finish}</h2>
            <p className="text-gray-600 mb-4">{acabado.description}</p>
            <div className="flex justify-center">


                {acabado.images?.length > 0 ? (
                    <div className="relative mb-4 w-1/3  ">
                        <div className="overflow-hidden rounded-lg ">
                            <img
                                src={acabado.images[currentIndex]?.url}
                                alt={acabado.images[currentIndex]?.alt}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                        <button
                            onClick={handlePrev}
                            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600"
                        >
                            ‹
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600"
                        >
                            ›
                        </button>
                    </div>
                ) : <div className="flex justify-center">
                    <FaBell size={150} className="text-amber-700" />
                </div>}
            </div>

            <hr className="border-base my-4" />
            <aside className="flex gap-2 justify-end mt-3">
                <button
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
                    onClick={onEdit}
                >
                    <FaEdit />
                    <span>Editar</span>
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2">
                    <FaPlus />
                    <span>Agregar imagen</span>
                </button>
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
                    onClick={() => handleTrash(acabado.id)}
                >
                    <FaTrash />
                    <span>Eliminar</span>
                </button>
            </aside>
        </div>
    );
};







const ModalAlloys = ({ setIsModalOpen, isModalOpen, SetIsChangeAlloys }) => {
    const bellService = new CampanaService()
    const [alloy, setAlloy] = useState({
        type: "",
        pricePerKg: 0
    })

    const handleChange = (e) => {
        setAlloy({ ...alloy, [e.target.name]: e.target.value })
    }

    const handleAddAlloy = async (e) => {
        e.preventDefault()
        await bellService.AddAleacion(alloy)
        setAlloy({
            type: "",
            pricePerKg: 0
        })
        SetIsChangeAlloys(true)
        setIsModalOpen(false)

    }


    return (

        <div className={`${isModalOpen ? "block" : "hidden"} fixed inset-0 top-0 left-0 w-full h-full bg-black bg-opacity-75  flex items-center justify-center`}>
            <div className="bg-white rounded-lg md:w-[40%] p-6 relative">
                <div className={`fixed ${isModalOpen ? "block" : "hidden"} inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center`}>
                    <div className="bg-white rounded-lg w-[600px] p-6 relative">
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
                                <input className="shadow appearance-none border border-base rounded w-full py-2 px-3 text-gray-700 font-medium leading-tight focus:outline-none focus:shadow-outline" type="text" name="type" value={alloy.type} onChange={handleChange} id="" />

                            </div>
                            <div className="mb-4">
                                <label className="block text-base  font-bold mb-2" htmlFor="">Precio por KG</label>
                                <input className="shadow appearance-none border border-base rounded w-full py-2 px-3 text-gray-700 font-medium leading-tight focus:outline-none focus:shadow-outline" type="number" name="pricePerKg" value={alloy.pricePerKg} onChange={handleChange} id="" />

                            </div>
                        </form>

                        <div className="text-center">
                            <button
                                className={`px-6 py-2 rounded-full text-white  bg-gray-500 
                            `}
                                onClick={handleAddAlloy}
                            >
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ModalEditAlloys = ({ setIsModalOpen, isModalOpen, SetIsChangeAlloys, dataAlloy }) => {
    const bellService = new CampanaService()
    const [alloy, setAlloy] = useState({
        dataAlloy
    })
    useEffect(() => {
        setAlloy(dataAlloy)
    }, [dataAlloy])


    const handleChange = (e) => {
        setAlloy({ ...alloy, [e.target.name]: e.target.value })
    }

    const handleEditAlloy = async (e) => {
        e.preventDefault()
        await bellService.UpdateAleacion(alloy)
        setAlloy({
            type: "",
            pricePerKg: 0
        })
        SetIsChangeAlloys(true)
        setIsModalOpen(false)

    }


    return (

        <div className={`${isModalOpen ? "block" : "hidden"} fixed inset-0 top-0 left-0 w-full h-full bg-black bg-opacity-75  flex items-center justify-center`}>
            <div className="bg-white rounded-lg md:w-[40%] p-6 relative">
                <div className={`fixed ${isModalOpen ? "block" : "hidden"} inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center`}>
                    <div className="bg-white rounded-lg w-[600px] p-6 relative">
                        <button
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <h2 className="text-2xl font-bold mb-4 text-center">Editar aleación</h2>
                        <form action="">
                            <div className="mb-4">
                                <label className="block text-base  font-bold mb-2" htmlFor="">Nombre de la aleacion</label>
                                <input className="shadow appearance-none border border-base rounded w-full py-2 px-3 text-gray-700 font-medium leading-tight focus:outline-none focus:shadow-outline" type="text" name="type" value={alloy.type} onChange={handleChange} id="" />

                            </div>

                            <div className="mb-4">
                                <label className="block text-base  font-bold mb-2" htmlFor="">Precio por KG</label>
                                <input className="shadow appearance-none border border-base rounded w-full py-2 px-3 text-gray-700 font-medium leading-tight focus:outline-none focus:shadow-outline" type="number" name="pricePerKg" value={alloy.pricePerKg} onChange={handleChange} id="" />

                            </div>
                        </form>

                        <div className="text-center">
                            <button
                                className={`px-6 py-2 rounded-full text-white  bg-gray-500 
                            `}
                                onClick={handleEditAlloy}
                            >
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ModalFinish = ({ isModalOpen, setIsModalOpen, handleAddFinish }) => {
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [imagenes, setImagenes] = useState([])
    const [imagen, setImagen] = useState()
    const handleAgregarImagen = (e) => {
        e.preventDefault()
        if (imagen) {
            setImagenes([...imagenes, { url: imagen, alt: "alt 1" }]);
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

            <div className="bg-white relative rounded-lg shadow-lg p-4 w-1/2">
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                    onClick={() => setIsModalOpen(false)}
                >
                    <X className="w-6 h-6" />
                </button>
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


const AddAcabadoModal = ({ isModalOpen, onClose, onAddAcabado }) => {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagenes, setImagenes] = useState([]);
    const [imagen, setImagen] = useState(null);

    const handleAgregarImagen = (e) => {
        e.preventDefault();
        if (imagen) {
            setImagenes([...imagenes, imagen]);
            setImagen(null);
        }
    };

    const handleEliminarImagen = (index) => {
        const nuevasImagenes = [...imagenes];
        nuevasImagenes.splice(index, 1);
        setImagenes(nuevasImagenes);
    };

    const handleAgregarAcabado = (e) => {
        e.preventDefault();
        const nuevoAcabado = {
            nombre,
            descripcion,
            imagenes,
        };
        onAddAcabado(nuevoAcabado);
        setNombre("");
        setDescripcion("");
        setImagenes([]);
        onClose();
    };



    return (
        <div className={`${isModalOpen ? "block" : "hidden"} fixed inset-0 top-0 left-0 w-full h-full bg-black bg-opacity-75  flex items-center justify-center`}>
            <div className="bg-white rounded-lg md:w-[40%] p-6 relative">
                <div className={`fixed ${isModalOpen ? "block" : "hidden"} inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center`}>
                    <div className="bg-white rounded-lg w-[600px] p-6 relative">
                        <button
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                            onClick={() => onClose(false)}
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <h2 className="text-2xl font-bold mb-4 text-center">Agregar nuevo Tamaño</h2>
                        <form>
                            {/* Nombre */}
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="nombre"
                                >
                                    Nombre del acabado
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre"
                                    type="text"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </div>
                            {/* Descripción */}
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="descripcion"
                                >
                                    Descripción del acabado
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="descripcion"
                                    value={descripcion}
                                    onChange={(e) => setDescripcion(e.target.value)}
                                />
                            </div>
                            {/* Imágenes */}
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="imagenes"
                                >
                                    Imágenes del acabado
                                </label>
                                <div className="flex flex-wrap gap-4 mb-4">
                                    {imagenes.map((img, index) => (
                                        <div
                                            key={index}
                                            className="relative w-24 h-24 border rounded overflow-hidden"
                                        >
                                            <img src={img} alt={`Imagen ${index + 1}`} className="w-full h-full object-cover" />
                                            <button
                                                className="absolute top-1 right-1 bg-red-500 hover:bg-red-700 text-white rounded-full p-1 text-xs"
                                                onClick={() => handleEliminarImagen(index)}
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input
                                        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="imagen"
                                        type="file"
                                        onChange={(e) => setImagen(URL.createObjectURL(e.target.files[0]))}
                                    />
                                    <button
                                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={handleAgregarImagen}
                                    >
                                        <FaPlus /> Agregar
                                    </button>
                                </div>
                            </div>
                            {/* Botones */}
                            <div className="flex justify-end gap-4">
                                
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={handleAgregarAcabado}
                                >
                                    Agregar acabado
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};



const ModalSizes = ({ setIsModalOpen, isModalOpen, SetIsChangeSizes }) => {
    const bellService = new CampanaService()
    const [size, setSize] = useState({
        weight: 0,
        height: 0,
        diameter: 0
    })

    const handleChange = (e) => {
        setSize({ ...size, [e.target.name]: e.target.value })
    }

    const handleAddSize = async (e) => {
        e.preventDefault()
        await bellService.AddPeso(size)
        setSize({
            weight: 0,
            height: 0,
            diameter: 0
        })
        SetIsChangeSizes(true)
        setIsModalOpen(false)

    }


    return (

        <div className={`${isModalOpen ? "block" : "hidden"} fixed inset-0 top-0 left-0 w-full h-full bg-black bg-opacity-75  flex items-center justify-center`}>
            <div className="bg-white rounded-lg md:w-[40%] p-6 relative">
                <div className={`fixed ${isModalOpen ? "block" : "hidden"} inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center`}>
                    <div className="bg-white rounded-lg w-[600px] p-6 relative">
                        <button
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <h2 className="text-2xl font-bold mb-4 text-center">Agregar nuevo Tamaño</h2>
                        <form action="">

                            <div className="mb-4">
                                <label className="block text-base  font-bold mb-2" htmlFor="">Peso de la campana</label>
                                <input className="shadow appearance-none border border-base rounded w-full py-2 px-3 text-gray-700 font-medium leading-tight focus:outline-none focus:shadow-outline" type="number" name="weight" value={size.weight} onChange={handleChange} id="" />

                            </div>
                            <div className="mb-4">
                                <label className="block text-base  font-bold mb-2" htmlFor="">Altura</label>
                                <input className="shadow appearance-none border border-base rounded w-full py-2 px-3 text-gray-700 font-medium leading-tight focus:outline-none focus:shadow-outline" type="number" name="height" value={size.height} onChange={handleChange} id="" />

                            </div>
                            <div className="mb-4">
                                <label className="block text-base  font-bold mb-2" htmlFor="">Diámetro</label>
                                <input className="shadow appearance-none border border-base rounded w-full py-2 px-3 text-gray-700 font-medium leading-tight focus:outline-none focus:shadow-outline" type="number" name="diameter" value={size.diameter} onChange={handleChange} id="" />

                            </div>
                        </form>

                        <div className="text-center">
                            <button
                                className={`px-6 py-2 rounded-full text-white  bg-gray-500 
                            `}
                                onClick={handleAddSize}
                            >
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const ModalEditSizes = ({ setIsModalOpen, isModalOpen, SetIsChangeSizes, dataSize }) => {
    const bellService = new CampanaService()
    const [size, setSize] = useState(dataSize)

    useEffect(() => {
        setSize(dataSize)
    }, [dataSize])

    const handleChange = (e) => {
        setSize({ ...size, [e.target.name]: e.target.value })
    }

    const handleAddSize = async (e) => {
        e.preventDefault()
        await bellService.AddPeso(size)
        setSize({
            weight: 0,
            height: 0,
            diameter: 0
        })
        SetIsChangeSizes(true)
        setIsModalOpen(false)

    }


    return (

        <div className={`${isModalOpen ? "block" : "hidden"} fixed inset-0 top-0 left-0 w-full h-full bg-black bg-opacity-75  flex items-center justify-center`}>
            <div className="bg-white rounded-lg md:w-[40%] p-6 relative">
                <div className={`fixed ${isModalOpen ? "block" : "hidden"} inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center`}>
                    <div className="bg-white rounded-lg w-[600px] p-6 relative">
                        <button
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <h2 className="text-2xl font-bold mb-4 text-center">Agregar nuevo Tamaño</h2>
                        <form action="">

                            <div className="mb-4">
                                <label className="block text-base  font-bold mb-2" htmlFor="">Peso de la campana</label>
                                <input className="shadow appearance-none border border-base rounded w-full py-2 px-3 text-gray-700 font-medium leading-tight focus:outline-none focus:shadow-outline" type="number" name="weight" value={size.weight} onChange={handleChange} id="" />

                            </div>
                            <div className="mb-4">
                                <label className="block text-base  font-bold mb-2" htmlFor="">Altura</label>
                                <input className="shadow appearance-none border border-base rounded w-full py-2 px-3 text-gray-700 font-medium leading-tight focus:outline-none focus:shadow-outline" type="number" name="height" value={size.height} onChange={handleChange} id="" />

                            </div>
                            <div className="mb-4">
                                <label className="block text-base  font-bold mb-2" htmlFor="">Diámetro</label>
                                <input className="shadow appearance-none border border-base rounded w-full py-2 px-3 text-gray-700 font-medium leading-tight focus:outline-none focus:shadow-outline" type="number" name="diameter" value={size.diameter} onChange={handleChange} id="" />

                            </div>
                        </form>

                        <div className="text-center">
                            <button
                                className={`px-6 py-2 rounded-full text-white  bg-gray-500 
                            `}
                                onClick={handleAddSize}
                            >
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}