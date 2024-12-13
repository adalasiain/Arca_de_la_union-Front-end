import uploadImageToImgBB from "./imgBBService";

class ProductsService {
  constructor() {
    this.baseURL = "https://arcadelaalianzaserver.onrender.com";
    this.token = this.getTokenFromStorage();
  }

  getTokenFromStorage() {
    return localStorage.getItem("authToken");
  }

  // Obtener todas las aleaciones
  async getProducts() {

    const response = await fetch(`${this.baseURL}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      }
    }
    )
    if (!response.ok) {
      console.log("error al inciar sesion")
    }
    const data = await response.json()
    console.log(data)
    return data;
  }


  async AddProduct(productData, file) {
    console.log("Agregando producto...");

    
var image={}
{
      try {
        const imageData = await uploadImageToImgBB(file);
        image=imageData
        // Guarda la información de cada imagen
      } catch (error) {
        console.error(`Error al subir el archivo ${file.name}:`, error);
      }
    }

    const producto ={
      ...productData, image:image
    }

    console.log(producto)
   

    try {
        const response = await fetch(`${this.baseURL}/products`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(producto)
        });

        if (!response.ok) {
            console.error("Error en la respuesta:", response.status, await response.text());
            return null;
        }

        const data = await response.json(); // Cambiar a .text() si tu servidor no responde con JSON
        console.log("Respuesta recibida:", data);
        return data;
    } catch (error) {
        console.error("Error en la solicitud:", error);
        return null;
    }
}

  async DeleteProduct(id) {
    const response = await fetch(`${this.baseURL}/products/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${this.token}`
      }

    }
    )
    if (!response.ok) {
      console.log("error ")
    }
    const data = await response.text()
    console.log(data)
    return data;
  }

  // Obtener todos los pesos
  async getPesos() {
    const response = await fetch(`${this.baseURL}/bells/sizes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      }
    }
    )
    if (!response.ok) {
      console.log("error al inciar sesion")
    }
    const data = await response.json()
    console.log(data)
    return data;
  }



  async AddPeso(size) {
    const response = await fetch(`${this.baseURL}/bells/sizes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      }, body: JSON.stringify(size)
    }
    )
    if (!response.ok) {
      console.log("error ")
    }
    const data = await response.json()
    console.log(data)
    return data;
  }

  async DeletePeso(id) {
    const response = await fetch(`${this.baseURL}/bells/sizes/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${this.token}`
      }

    }
    )
    if (!response.ok) {
      console.log("error ")
    }
    const data = await response.text()
    console.log(data)
    return data;
  }

  
}

export default ProductsService;
