import React from 'react';

const ProjectSection = () => {
    return (
        <div className="bg-gradient-to-b from-orange-100 to-orange-200 min-h-screen px-6 py-12">
            {/* Sección 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
                <h2 className="text-3xl font-bold text-orange-700 mb-4">
                    ¿Qué distingue a la empresa?
                </h2>
                <div className="flex flex-col md:flex-row md:items-center">
                    {/* Texto */}
                    <p className="text-gray-700 leading-relaxed md:w-2/3">
                        A lo largo de más de cinco décadas, esta compañía ha mantenido un compromiso inquebrantable con la excelencia, fusionando tradición y experiencia transmitidas a través de tres generaciones. Lo que la diferencia de otras empresas en el sector es su capacidad para combinar técnicas artesanales perfeccionadas con un enfoque moderno hacia la calidad, creando productos que no solo cumplen con estándares técnicos, sino que también reflejan una rica herencia cultural.
                        La confianza y lealtad de sus clientes, construidas a lo largo de los años, se fundamentan en la dedicación que pone en cada campana, asegurando que cada una sea una pieza única, con valor funcional y estético.
                    </p>
                    {/* Imagen */}
                    <div className="mt-6 md:mt-0 md:ml-8 md:w-1/3">
                        <img
                            
                            src='/img/img.jpeg'
                            alt="Proyecto artesanal"
                            className="rounded-lg object-cover shadow-md"
                        />
                    </div>
                </div>
            </div>

            {/* Sección 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-orange-500 mb-4">
                Tradición y tiempo de trabajo
                </h2>
                <div className="flex flex-col md:flex-row md:items-center">
                    {/* Imagen */}
                    <div className="mb-6 md:mb-0 md:mr-8 md:w-1/3">
                        <img
                            src="/img/img3.jpeg"
                            alt="Trabajo artesanal"
                            className="rounded-lg object-cover shadow-md"
                        />
                    </div>
                    {/* Texto */}
                    <p className="text-gray-700 leading-relaxed md:w-2/3">
                    Desde su fundación en 1970, la empresa ha trabajado de manera ininterrumpida, consolidándose como un pilar en su comunidad y como un referente en su sector. Este recorrido ha permitido perfeccionar sus técnicas de fabricación, manteniendo vivos los conocimientos y valores transmitidos de generación en generación. Su compromiso con la tradición se refleja en cada campana, que combina el arte de lo hecho a mano con un enfoque en la innovación y la mejora continua.
El tiempo y la experiencia han sido sus aliados más valiosos, permitiendo a la empresa adaptarse a los desafíos del mercado sin perder su esencia artesanal. Esta dualidad de tradición y modernidad es lo que la convierte en una empresa única, que mira hacia el futuro sin olvidar sus raíces.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
