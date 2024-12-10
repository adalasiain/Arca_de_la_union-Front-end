class VentasService{
    constructor(){
        this.baseUrl = "https://arcadelaalianzaserver.onrender.com";
        this.token = this.getTokenFromStorage(); 
    }

    getTokenFromStorage() {
        return localStorage.getItem("authToken");
      }

    async getVentas(){
    
        const response= await fetch(`${this.baseUrl}/orders`,{
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
}


export default VentasService