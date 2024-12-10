import React, { useState } from 'react';

import '../styles.css';
import img1 from '../assets/image.png'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import AuthService from '../services/AuthService';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const auth= new AuthService()

  const handleSubmit =async (e) => {
    e.preventDefault();
    
    await auth.login(username,password)
  };

  return (
    <div className="flex h-screen relative ">
      <div className="bg-[#B87333] flex-1 flex flex-col items-center justify-center">
        <div className="flex absolute top-0 left-0  text-white p-4">
          <img src={logo} alt="" className='w-32 h-16' />
          <h1 className="text-3xl font-bold">Arca de la Alianza</h1>
        </div>
        <img src={img1} alt="Arca de la Alianza" className="logo mb-4  " />

      </div>


      <div className="flex-1 flex items-center flex-col items-center justify-center p-8 bg-white shadow-md">
        <h1 className="text-4xl text-colorCafe1 mb-6 font-bold">Bienvenido de regreso!</h1>
        <form className="w-full max-w-sm text-center" onSubmit={handleSubmit}>
          <div className="mb-6">

            <input
              type="text"
              id="username"
              className="bg-[#d8d9de] rounded-2xl shadow appearance-none font-bold border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6 ">
            <input
              type="password"
              id="password"
              className="bg-[#d8d9de] rounded-2xl text-center font-bold shadow appearance-none border rounded w-64 py-2 px-3 text-colorCafe1 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className=" mt-8 mb-4 mx-2 text-center bg-colorCafe1 hover:bg-[#6e3c0d] text-white font-bold py-2 px-14 rounded-lg rounded focus:outline-none focus:shadow-outline w-3/4">
            Ingresar
          </button>
          <br />
        </form>
      </div>
    </div>
  );
};

export default Login;
