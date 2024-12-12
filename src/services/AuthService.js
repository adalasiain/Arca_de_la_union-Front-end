class AuthService{
    constructor() {
        this.serverUri= "https://arcadelaalianzaserver.onrender.com"
        // this.serverUri= "http://localhost:5000"
      }

    // src/services/authService.js
  // Cambia esta URL por la de tu API

// Función para realizar el login
 async login  (username, password){
  try {
    const response = await fetch(`${this.serverUri}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username , password }),
    });
    console.log(response)

    if (!response.ok) {
      throw new Error('Error al iniciar sesión');
    }

    const data = await response.json();
    // Aquí puedes guardar el token en el localStorage o contexto
    localStorage.setItem('authToken', data.token);
    return data;  // O puedes devolver solo el token si es lo que necesitas
  } catch (error) {
    console.error('Login Error:', error);
    throw error;
  }
};

// Función para realizar el registro
async register (name, email, password){
  try {
    const response = await fetch(`${this.serverUri}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      throw new Error('Error al registrar el usuario');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Register Error:', error);
    throw error;
  }
};

// Función para realizar el logout
async logout () {
  // Limpiar el token o cualquier dato de sesión
  localStorage.removeItem('authToken');
};

// Función para verificar si el usuario está autenticado
isAuthenticated () {
  const token = localStorage.getItem('authToken');
  return token ? true : false;
};

// Función para obtener el token
 getAuthToken  () {
  return localStorage.getItem('authToken');
};

}

export default AuthService;
