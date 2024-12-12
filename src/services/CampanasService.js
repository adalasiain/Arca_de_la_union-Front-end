import uploadImageToImgBB from "./imgBBService";

class CampanaService {
  constructor() {
    this.baseURL = "https://arcadelaalianzaserver.onrender.com";
    this.token = this.getTokenFromStorage();
  }

  getTokenFromStorage() {
    return localStorage.getItem("authToken");
  }

  // Obtener todas las aleaciones
  async getAleaciones() {

    const response = await fetch(`${this.baseURL}/bells/alloy`, {
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

  async AddAleacion(dataAlloy) {
    const response = await fetch(`${this.baseURL}/bells/alloy`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      }, body: JSON.stringify(dataAlloy)

    }
    )
    if (!response.ok) {
      console.log("error ")
    }
    const data = await response.json()
    console.log(data)
    return data;
  }

  async DeleteAleacion(id) {
    const response = await fetch(`${this.baseURL}/bells/alloy/${id}`, {
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

  async UpdateAleacion(alloy) {
    const response = await fetch(`${this.baseURL}/bells/alloy/${alloy.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      }, body: JSON.stringify(alloy)

    }
    )
    if (!response.ok) {
      console.log("error ")
    }
    const data = await response.text()
    console.log(data)
    return data;
  }



  // Obtener todos los acabados
  async getAcabados() {
    const response = await fetch(`${this.baseURL}/bells/finish`, {
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

  async AddAcabado(finishData, files) {
    console.log("Agregando acabado...");
    const formData = new FormData();

    const uploadedImages = [];
    // Agregar archivos
    for (const file of files) {
      try {
        const imageData = await uploadImageToImgBB(file);
        uploadedImages.push(imageData); // Guarda la información de cada imagen
      } catch (error) {
        console.error(`Error al subir el archivo ${file.name}:`, error);
      }
    }
    console.log(uploadedImages)

    const acabado ={
      ...finishData, images:uploadedImages
    }

   

    try {
        const response = await fetch(`${this.baseURL}/bells/acabado`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(acabado)
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

  async DeleteAcabado(id) {
    const response = await fetch(`${this.baseURL}/bells/finish/${id}`, {
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

export default CampanaService;
