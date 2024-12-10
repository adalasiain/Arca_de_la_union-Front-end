class AuthService {
    constructor() {
      this.baseUrl = "https://arcadelaalianzaserver.onrender.com/auth";
    }
  
    async login(username,password){
        console.log(username)
        const response= await fetch(`https://arcadelaalianzaserver.onrender.com/auth/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization": "Bearer "
            },
            body: JSON.stringify({username, password})
        }
       
    ) 
    console.log(response)

    if(!response.ok){
        console.log("error al inciar sesion")
    }

    const data= await response.json()
    localStorage.setItem("authToken", data.token);
    console.log(data)
    }
  }
  
 export default AuthService;