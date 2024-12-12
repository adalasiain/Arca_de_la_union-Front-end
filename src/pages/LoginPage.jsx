import React, { useState, useContext } from 'react';
import { AuthContext } from './../context/AuthContext';

const LoginPage = () => {
    const { login, user } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [isLoading, setIsloading] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setIsloading(true)

        try {
            await login(username, password);
            setIsloading(false)
        } catch (err) {
            setIsloading(false)
            setError('Error al iniciar sesión');
            setTimeout(() => {
               setError('')
            }, [4000])
        }
    };

    if (user) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800">Ya estás logueado</h2>
                    <p className="mt-2 text-gray-600">Bienvenido, {user.name}.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-orange-500">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Iniciar sesión</h2>

                {error && <div className="text-red-500 bg-red-200 px-2 py-1 text-center mb-4">{error}</div>}

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-semibold" htmlFor="email">
                            Usuario
                        </label>
                        <input
                            id="email"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        {
                            isLoading &&
                            <div className='flex justify-center items-center h-10 w-10 border-2 border-[#b87333] rounded-full'>
                                <div className='h-8 w-8 border-l-4  border-[#b87333] animate-spin rounded-l-full'>
                                </div>
                            </div>
                        }
                    </div>


                    <button
                        type="submit"
                        className="w-full py-3 mt-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Iniciar sesión
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        ¿No tienes cuenta?{' '}
                        <a href="/register" className="text-indigo-600 hover:underline">
                            Regístrate
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
