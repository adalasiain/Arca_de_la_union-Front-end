import React from 'react';

const ProjectSection = () => {
    return (
        <div className="flex justify-center min-h-screen bg-[url('/img/backgroundProducts.jpg')] bg-cover sm:bg-center sm:bg-no-repeat py-12">
            <div className="flex flex-col items-center gap-14 w-[85%] bg-[#eeeeee] bg-opacity-70 rounded-3xl shadow-lg">
                {/* Sección 1 */}
                <div className='w-[88%]'>
                    <h1 className='text-5xl text-[#b87333] font-extrabold mt-14 mb-8 text-center'>
                        Nuestra Huella en Cada Proyecto
                    </h1>
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                        <p className="text-gray-700 text-justify text-lg leading-relaxed lg:w-2/3">
                            En cada campana que fabricamos, dejamos una huella de dedicación, calidad y tradición. Desde nuestros inicios en 1970, hemos forjado una reputación que trasciende generaciones. Cada proyecto que emprendemos es una extensión de nuestra herencia, una manifestación de la destreza adquirida a lo largo de más de cinco décadas. La confianza que hemos ganado de nuestros clientes a lo largo de los años es el resultado de esta pasión por la perfección y por cada detalle. La calidad de nuestras campanas no solo se mide en su funcionalidad, sino también en su valor estético y su capacidad para ser testigos de momentos importantes en la vida de las personas. Cada pieza es una historia, un testimonio de nuestra evolución, un reflejo de nuestra huella en cada proyecto.
                        </p>
                        <div className="lg:w-1/3">
                            <img
                                src='https://pueblosmexico.com.mx/public/img/arton29700.webp'
                                alt="Proyecto artesanal"
                                className="w-full lg:min-h-[280px] rounded-3xl object-cover shadow-md"
                            />
                        </div>
                    </div>
                </div>

                {/* Sección 2 */}
                <div className='w-[88%]'>
                    <h2 className="text-4xl text-[#ee9f05] font-extrabold mb-4">
                        ¿Qué Distingue a la Empresa?
                    </h2>
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                        {/* Texto */}
                        <p className="text-gray-700 text-justify text-lg leading-relaxed lg:w-2/3">
                            A lo largo de más de cinco décadas, esta compañía ha mantenido un compromiso inquebrantable con la excelencia, fusionando tradición y experiencia transmitidas a través de tres generaciones. Lo que la diferencia de otras empresas en el sector es su capacidad para combinar técnicas artesanales perfeccionadas con un enfoque moderno hacia la calidad, creando productos que no solo cumplen con estándares técnicos, sino que también reflejan una rica herencia cultural.
                            La confianza y lealtad de sus clientes, construidas a lo largo de los años, se fundamentan en la dedicación que pone en cada campana, asegurando que cada una sea una pieza única, con valor funcional y estético.
                        </p>
                        {/* Imagen */}
                        <div className="lg:w-1/3">
                            <img
                                src='/img/img.jpeg'
                                alt="Proyecto artesanal"
                                className="w-full lg:max-h-[300px] rounded-3xl object-cover shadow-md"
                            />
                        </div>
                    </div>
                </div>

                {/* Sección 3 */}
                <div className='w-[88%] mb-14'>
                    <h2 className="text-4xl text-[#ee9f05] font-extrabold mb-4">
                    Tradición de más de cinco Décadas
                    </h2>
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                        {/* Imagen */}
                        <div className="lg:w-1/3">
                            <img
                                src="/img/img2.jpeg"
                                alt="Trabajo artesanal"
                                className="w-full lg:min-h-[300px] rounded-3xl object-cover shadow-md"
                            />
                        </div>
                        {/* Texto */}
                        <p className="text-gray-700 text-justify text-lg leading-relaxed lg:w-2/3">
                            Desde su fundación en 1970, la empresa ha trabajado de manera ininterrumpida, consolidándose como un pilar en su comunidad y como un referente en su sector. Este recorrido ha permitido perfeccionar sus técnicas de fabricación, manteniendo vivos los conocimientos y valores transmitidos de generación en generación. Su compromiso con la tradición se refleja en cada campana, que combina el arte de lo hecho a mano con un enfoque en la innovación y la mejora continua.
                            El tiempo y la experiencia han sido sus aliados más valiosos, permitiendo a la empresa adaptarse a los desafíos del mercado sin perder su esencia artesanal. Esta dualidad de tradición y modernidad es lo que la convierte en una empresa única, que mira hacia el futuro sin olvidar sus raíces.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
