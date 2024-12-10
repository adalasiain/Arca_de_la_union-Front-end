import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    const { nombre, email, mensaje } = formData;

    if (!nombre || !email || !mensaje) {
      alert('Por favor, completa todos los campos antes de continuar.');
      return;
    }

    const phoneNumber = '527711980579'; // Número de teléfono destino en formato internacional
    const text = `Hola, soy ${nombre}. Mi correo es: ${email}. Mensaje: ${mensaje}`;
    const url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;

    // Redirige a WhatsApp
    window.open(url, '_blank');

    // Limpia el formulario y muestra el mensaje de enviado
    setFormData({ nombre: '', email: '', mensaje: '' });
    setIsSent(true);

    // Oculta el mensaje de enviado después de 3 segundos
    setTimeout(() => {
      setIsSent(false);
    }, 3000);
  };

  return (
    <div className="flex flex-grow items-center justify-center bg-[url('/img/backgroundProducts.jpg')] bg-cover sm:bg-center sm:bg-no-repeat p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-screen-xl gap-6">
        
        {/* Sección de Imagen y Descripción */}
        <div className="flex flex-col items-center justify-around">
          <a
            href="https://maps.app.goo.gl/Lx9QJUWyQyL8qNG5A"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/maps_location.png"
              alt="Mapa"
              className="w-auto max-h-[350px] object-cover"
            />
          </a>
          <p className="text-lg text-center text-white mt-4">
            <a
              href="https://maps.app.goo.gl/Lx9QJUWyQyL8qNG5A"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              43211 Tlahuelompa, Hgo. Frente a abarrotera "El Imperio de la Sierra"
            </a>
          </p>
        </div>

        {/* Sección de Título y Formulario */}
        <div className="flex flex-col justify-center sm:p-6 w-full lg:w-[80%]">
          <h1 className="text-5xl font-extrabold text-center text-white mb-10">
            Cotiza tu Proyecto
          </h1>

          {/* Formulario */}
          <form className="space-y-6" onSubmit={handleWhatsAppRedirect}>
            <div>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full font-bold px-5 py-3 bg-[#eeeeee] border border-gray-300 rounded-full focus:ring focus:ring-[#b87333] focus:outline-none"
                placeholder="Nombre"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full font-bold px-5 py-3 bg-[#eeeeee] border border-gray-300 rounded-full focus:ring focus:ring-[#b87333] focus:outline-none"
                placeholder="Email"
              />
            </div>
            <div>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                className="w-full font-bold px-5 py-3 bg-[#eeeeee] border border-gray-300 rounded-2xl focus:ring focus:ring-[#b87333] focus:outline-none"
                rows="4"
                placeholder="Escribe tu Mensaje"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center bg-[#b87333] text-white text-xl font-bold py-3 rounded-full hover:bg-[#9c7653] focus:ring focus:outline-none focus:ring-[#6e3c0d] transition duration-300"
            >
              Contactar
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-3" viewBox="0 0 1792 1792">
                <path fill="currentColor" d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45q-14 8-31 8q-11 0-24-5l-453-185l-242 295q-18 23-49 23q-13 0-22-4q-19-7-30.5-23.5T640 1728v-349l864-1059l-1069 925l-395-162q-37-14-40-55q-2-40 32-59L1696 9q15-9 32-9q20 0 36 11"/>
              </svg>
            </button>
          </form>          
        </div>
      </div>
    </div>
  );
};

export default ContactUs;