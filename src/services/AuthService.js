class AuthService {
    constructor(){
        this.serverUri= "https://arcadelaalianzaserver.onrender.com"
        // this.serverUri = "http://localhost:8080";
    }

    async login(username, password) {
      try {
        const response = await fetch(`${this.serverUri}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

       console.log(response.status)
       if(response.status=== 401){
        throw new Error('Credenciales inválidas');
       }
  
        // if (!response.ok) {
        //   throw new Error('Credenciales inválidas');
        // }
  
        const data = await response.json();
        // Guardar el token o información del usuario en localStorage o cookies si es necesario
        localStorage.setItem('user', JSON.stringify(data));

        return data;
      } catch (error) {
        throw new Error('Error en la autenticación: ' + error.message);
      }
    }
  
    static logout() {
      // Eliminar la información del usuario de localStorage
      localStorage.removeItem('user');
    }
  
    async getCurrentUser() {
      // Verifica si hay un usuario guardado en localStorage
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        return user;
      }
      throw new Error('No se encontró usuario');
    }
  }
  
  export default AuthService;
  