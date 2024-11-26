class CampanasService {
    constructor() {
      this.serverUri= "https://arcadelaalianzaserver.onrender.com"
      // this.serverUri= "http://localhost:5000"
    }
    async GetBellOptions() {
      try {
        const response = await fetch(`${this.serverUri}/bells`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
            },
           
        });

        const data = await response.json();

        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    }
}

export default CampanasService;