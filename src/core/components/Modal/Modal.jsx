const Modal = () => {

    const handleClose = () => {
        // Cerrar el Modal
    };

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
            <div
                id="popup-modal"
                tabIndex="-1"
                className="relative w-full max-w-md max-h-full bg-white rounded-3xl shadow-lg overflow-auto"
            >
                {/* Botón para cerrar el modal */}
                <button
                    type="button"
                    className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-red-500 hover:text-white rounded-xl text-sm w-8 h-8 inline-flex justify-center items-center"
                    onClick={handleClose}
                    aria-label="Close modal"
                >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>

                <form className="flex flex-wrap justify-center p-5 md:p-5 text-center">
                    <div className="pt-9 mb-5 w-[90%]">
                        <label htmlFor="username" className="absolute text-[#ee9f05] text-md font-bold -translate-y-3 top-26 z-10 origin-[0] bg-white px-3 ml-12 start-1">Your Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="block p-3 w-full text-gray-900 bg-transparent rounded-2xl border-2 border-[#ee9f05] appearance-none focus:outline-none focus:ring-[#ee9f05] focus:border-[#ee9f05]"
                            placeholder="Username"
                            required
                        />
                    </div>

                    <div className="pt-5 mb-5 w-[90%]">
                        <label htmlFor="email" className="absolute text-[#ee9f05] text-md font-bold -translate-y-3 top-26 z-10 origin-[0] bg-white px-3 ml-12 start-1">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="block p-3 w-full text-gray-900 bg-transparent rounded-2xl border-2 border-[#ee9f05] appearance-none focus:outline-none focus:ring-[#ee9f05] focus:border-[#ee9f05]"
                            placeholder="name@company.com"
                            required
                        />
                    </div>

                    <div className="pt-5 mb-5 w-[90%]">
                        <label htmlFor="phone" className="absolute text-[#ee9f05] text-md font-bold -translate-y-3 top-26 z-10 origin-[0] bg-white px-3 ml-12 start-1">Your Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="771 222 2222"
                            className="block p-3 w-full text-gray-900 bg-transparent rounded-2xl border-2 border-[#ee9f05] appearance-none focus:outline-none focus:ring-[#ee9f05] focus:border-[#ee9f05]"
                            required
                        />
                    </div>

                    <div className="flex justify-center mt-5 mb-3 w-[90%]">
                        <button
                            type="button"
                            className="text-white bg-[#b87333] hover:bg-[#a27648] focus:ring focus:outline-none focus:ring-[#895c23] font-medium rounded-full px-8 py-2.5 flex items-center space-x-2"
                        >
                            <span className="text-xl font-bold">Contactar</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" viewBox="0 0 24 24">
                                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                    <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z" />
                                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                                </g>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

};

export default Modal;