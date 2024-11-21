const CustomizationForm = () => {
    return (
        <div className="w-full sm:w-3/5 flex flex-col justify-evenly p-4 md:p-12">
            {/* Opciones de selección */}
            <div className="flex w-full space-x-4 mb-5">
                {["Acabado", "Aleaciones", "Peso"].map((label, index) => (
                    <div key={index} className="flex justify-center w-1/3">
                        <select
                            defaultValue="1"
                            id={label.toLowerCase()}
                            className="bg-[#ee9f05] text-white text-lg font-bold border-2 border-[#ee9f05] rounded-full focus:outline-none focus:ring-[#da9207] focus:border-[#da9207] block w-full p-2.5"
                        >
                            <option>{label}</option>
                            {[1, 2, 3].map((opt) => (
                                <option key={opt} value={`${label.toLowerCase()}${opt}`}>
                                    {`${label} ${opt}`}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>

            {/* Detalles del producto */}
            <div className="flex justify-evenly w-full space-x-8 mb-5">
                <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                        <b className="mr-2 md:text-xl">Peso:</b>
                        <p className="md:text-xl">150 kg</p>
                    </div>
                    <div className="flex items-center">
                        <b className="mr-2 md:text-xl">Material:</b>
                        <p className="md:text-xl">Cobre</p>
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                        <b className="mr-2 md:text-xl">Tamaño:</b>
                        <p className="md:text-xl">150 x 15 x 2</p>
                    </div>
                    <div className="flex items-center">
                        <b className="mr-2 md:text-xl">Acabado:</b>
                        <p className="md:text-xl">Mate</p>
                    </div>
                </div>
            </div>

            {/* Formulario de personalización */}
            <form>
                <div className="relative mb-5 px-7">
                    <textarea
                        id="message"
                        rows="4"
                        className="block p-4 w-full text-gray-900 bg-transparent rounded-3xl border-2 border-[#ee9f05] appearance-none focus:outline-none focus:ring-[#ee9f05] focus:border-[#ee9f05]"
                        placeholder="Describe si deseas añadir algún logo, imagen o diseño a tu producto"
                    ></textarea>
                    <label
                        htmlFor="message"
                        className="absolute text-[#ee9f05] text-lg font-bold -translate-y-5 top-2 z-10 origin-[0] bg-[#eeeeee] px-2 ml-10 start-1"
                    >
                        Personalización:
                    </label>
                </div>
                <div className="flex justify-center">
                    <button
                        type="button"
                        className="text-white bg-[#b87333] hover:bg-[#a27648] focus:ring focus:outline-none focus:ring-[#895c23] font-medium rounded-full px-8 py-2.5 flex items-center space-x-2"
                    >
                        <span className="text-xl font-bold">Pagar Ahora</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 56 56" aria-hidden="true">
                            <path fill="currentColor" d="M28 4c13.255 0 24 10.745 24 24S41.255 52 28 52S4 41.255 4 28S14.745 4 28 4m0 4C16.954 8 8 16.954 8 28s8.954 20 20 20s20-8.954 20-20S39.046 8 28 8m.573 6.286v2.687c3.976.319 6.855 2.704 6.982 6.314h-3.308c-.207-2.004-1.638-3.165-3.674-3.419V26.5l.764.19c4.183.971 6.473 2.689 6.473 6.076c0 3.897-3.181 6.107-7.237 6.394v2.671h-1.797V39.16c-4.04-.303-7.236-2.577-7.347-6.394h3.292c.286 1.861 1.495 3.229 4.055 3.5V29.33l-.652-.16c-4.04-.937-6.218-2.75-6.218-5.979c0-3.563 2.862-5.916 6.87-6.219v-2.687zm0 15.458v6.537c2.72-.207 3.865-1.495 3.865-3.197c0-1.638-.89-2.608-3.865-3.34m-1.797-9.876c-2.29.286-3.499 1.606-3.499 3.054s.955 2.512 3.5 3.149z"/>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CustomizationForm;