class CampanaService {
    constructor() {
      this.baseURL ="https://arcadelaalianzaserver.onrender.com";
      this.token = this.getTokenFromStorage();
    }

    getTokenFromStorage() {
        return localStorage.getItem("authToken");
      }
  
    // Obtener todas las aleaciones
    async getAleaciones() {
    
        const response= await fetch(`${this.baseURL}/bells/alloy`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${this.token}`
            }
        }
    ) 
    if(!response.ok){
        console.log("error al inciar sesion")
    }
    const data= await response.json()
    console.log(data)
    return data;
    }
    
    async AddAleacion(dataAlloy) {
        const response= await fetch(`${this.baseURL}/bells/alloy`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${this.token}`
            },body:JSON.stringify(dataAlloy)
            
        }
    ) 
    if(!response.ok){
        console.log("error ")
    }
    const data= await response.json()
    console.log(data)
    return data;
    }

    async DeleteAleacion(id) {
        const response= await fetch(`${this.baseURL}/bells/alloy/${id}`,{
            method:"DELETE",
            headers:{
                "Authorization": `Bearer ${this.token}`
            }
            
        }
    ) 
    if(!response.ok){
        console.log("error ")
    }
    const data= await response.text()
    console.log(data)
    return data;
    }

  
    // Obtener todos los acabados
    async getAcabados() {
      try {
        const response = await fetch(`${this.baseURL}/acabados`);
        if (!response.ok) {
          throw new Error(`Error al obtener los acabados: ${response.statusText}`);
        }
        return await response.json();
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  
    // Obtener todos los pesos
    async getPesos() {
      try {
        const response = await fetch(`${this.baseURL}/pesos`);
        if (!response.ok) {
          throw new Error(`Error al obtener los pesos: ${response.statusText}`);
        }
        return await response.json();
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  
    // Crear un nuevo elemento (aleación, acabado o peso)
    async createItem(endpoint, data) {
      try {
        const response = await fetch(`${this.baseURL}/${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          throw new Error(`Error al crear el elemento: ${response.statusText}`);
        }
        return await response.json();
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  }
  
  export default CampanaService;
  